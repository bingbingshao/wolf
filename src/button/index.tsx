/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 14:00:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-13 14:27:19
 * @FilePath: /wolf/src/button/index.tsx
 * @Description:
 */
import React from 'react';
import './index.less';

type buttonProps = {
  /**
   * @description  按钮名称
   * @default 按钮
   */
  title?: string;
};

const WButton: React.FC<buttonProps> = (props) => {
  const { title = '按钮' }: any = props;

  return (
    <div className="w-button samll">
      <span>{title}</span>
    </div>
  );
};

export default WButton;
