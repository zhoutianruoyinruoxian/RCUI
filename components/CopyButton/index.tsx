import React, { useEffect, useMemo, useRef } from 'react';
import { Button, message } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import ClipboardJS from 'clipboard';

interface CopyButtonProps extends ButtonProps {
  id?: string;
  targetId: string;
}

export default function CopyButton({ id, targetId, ...others }: CopyButtonProps) {

  const clipboardRef = useRef(null);

  const sourceId = useMemo(() => id || `copySource-${Date.now()}`, []);

  useEffect(() => {
    init();
    return destroy;
  }, []);

  const init = () => {
    const clipboard = new ClipboardJS(`#${sourceId}`);
    clipboardRef.current = clipboard;
    clipboard.on('success', (e) => {
      message.success('复制成功');
      // console.info('Action:', e.action);
      // console.info('Text:', e.text);
      e.clearSelection();
    });
    clipboard.on('error', (e) => {
      message.error('复制失败');
      // console.error('Action:', e.action);
      // console.error('Trigger:', e.trigger);
    });
  };

  const destroy = () => {
    clipboardRef.current.destroy();
  };

  return (
    <Button
      id={sourceId}
      data-clipboard-action="copy"
      data-clipboard-target={`#${targetId}`}
      {...others}
    />
  );
}

CopyButton.defaultProps = {
  children: '复制',
};
