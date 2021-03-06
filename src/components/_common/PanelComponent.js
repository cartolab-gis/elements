import React from 'react';
import { Card, Close, Flex, useThemeUI } from 'theme-ui';

const PanelComponent = ({ closable, onClose, sx, children, ...rest }) => {
  const { theme } = useThemeUI();

  return (
    <Card
      className="cl-panel-component"
      color="text"
      sx={{
        padding: 3,
        width: '300px',
        borderRadius: '4px',
        boxShadow: '0 0 4px rgba(0, 0, 0, .6)',
        bg: 'background',
        ...sx,
        paddingTop: closable ? 0 : 3
        // paddingRight: closable ? 0 : 3
      }}
      {...rest}
    >
      {closable && (
        <Flex
          sx={{
            justifyContent: 'flex-end',
            marginRight: `-${theme.space ? theme.space[3] : 16}px`
          }}
        >
          <Close
            sx={{
              color: 'text',
              height: '24px',
              width: '24px',
              ':hover': { cursor: 'pointer' }
            }}
            onClick={onClose}
          />
        </Flex>
      )}
      {children}
    </Card>
  );
};

export default PanelComponent;
