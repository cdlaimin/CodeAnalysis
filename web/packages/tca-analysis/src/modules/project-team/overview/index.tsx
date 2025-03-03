// Copyright (c) 2021-2022 THL A29 Limited
//
// This source code file is made available under MIT License
// See LICENSE for details
// ==============================================================================

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Button, Input, message } from 'coding-oa-uikit';
import { pick, get, find } from 'lodash';
import { useSelector } from 'react-redux';

// 项目内
import { getProjectListRouter, getProjectOverviewRouter } from '@src/utils/getRoutePath';
import { t } from '@src/i18n/i18next';
import { formatDateTime, getUserName } from '@src/utils';
import { getProjectTeam, putProjectTeam, disableProject} from '@src/services/common';
import DeleteModal from '@src/components/delete-modal';

const layout = {
  labelCol: { span: 6 },
};

const Overview = () => {
  const [form] = Form.useForm();
  const [team, setTeam] = useState<any>({});
  const [edit, setEdit] = useState(false);
  const { org_sid: orgSid, team_name: teamName }: any = useParams();
  // 判断是否有权限删除团队项目
  const history: any = useHistory();
  const APP = useSelector((state: any) => state.APP);
  const isSuperuser = get(APP, 'user.is_superuser', false); // 当前用户是否是超级管理员
  const userName = get(APP, 'user.username', null);
  const isAdmin = !!find(team?.admins, { username: userName });  // 当前用户是否是项目管理员
  const deletable = isAdmin || isSuperuser;  // 删除权限
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);

  // 重置
  const onReset = () => {
    setEdit(false);
    form.resetFields();
  };

  const onFinish = (values: any) => {
    putProjectTeam(
      orgSid,
      team.name,
      pick(values, ['name', 'display_name', 'description']),
    ).then((response: any) => {
      message.success(t('项目信息更新成功'));
      setTeam(response);
      onReset();
      if (values.name !== teamName) {
        history.replace(getProjectOverviewRouter(orgSid, values.name));
      }
    });
  };

  const init = () => {
    getProjectTeam(orgSid, teamName).then((res) => {
      setTeam(res);
      onReset();
    });
  };

  useEffect(() => {
    if (teamName) {
      init();
    }
  }, [orgSid, teamName]);

  const handleDeleteTeam = () => {
    disableProject(orgSid, teamName, {status: 2}).then(() => {
      message.success('项目已禁用');
      history.push(getProjectListRouter(orgSid));
    }).finally(() => setDeleteVisible(false));
  };

  const onDelete = () => {
    setDeleteVisible(true);
  };

  return (
    <div className="pa-lg">
      <DeleteModal
        actionType={t('禁用')}
        objectType={t('项目')}
        addtionInfo={t('后续如需恢复项目，请联系平台管理员在管理后台恢复')}
        confirmName={teamName}
        visible={deleteVisible}
        onCancel={() => setDeleteVisible(false)}
        onOk={handleDeleteTeam}
      />
      <h3 className="mb-md">{t('项目概览')}</h3>
      <Form
        {...layout}
        style={{ width: '530px' }}
        form={form}
        initialValues={team}
        onFinish={values => onFinish(values)}
      >
        <Form.Item
          label={t('项目唯一标识')}
          name="name"
        >
          <span>{team.name}</span>
        </Form.Item>
        <Form.Item
          label={t('项目名称')}
          name="display_name"
          rules={edit ? [{ required: true, message: t('项目名称为必填项') }] : undefined}
        >
          {edit ? <Input width={400} /> : <>{team.display_name}</>}
        </Form.Item>
        <Form.Item label={t('项目描述')} name="description">
          {edit ? <Input.TextArea /> : <>{team.description}</>}
        </Form.Item>

        <Form.Item label={t('创建人')} name="creator">
          <span>{getUserName(team.creator)}</span>
        </Form.Item>
        <Form.Item label={t('创建时间')} name="created_time">
          <span>{formatDateTime(team.created_time)}</span>
        </Form.Item>
        <div style={{ marginTop: '30px' }}>
          {edit ? (
            <>
              <Button type="primary" htmlType="submit" key="submit">
                {t('确定')}
              </Button>
              <Button className=" ml-12" htmlType="button" onClick={onReset}>
                {t('取消')}
              </Button>
            </>
          ) : (
            <Button
              key="edit"
              htmlType="button"
              type="primary"
              onClick={() => setEdit(true)}
            >
              {t('编辑')}
            </Button>
          )}
          {deletable && <Button className="ml-12" htmlType="button" onClick={onDelete} danger type='primary'>
            {t('禁用项目')}
          </Button>}
        </div>
      </Form>
    </div>
  );
};

export default Overview;
