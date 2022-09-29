import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div.attrs((props) => ({
  width: props.width,
  height: props.height,
  marginBottom: props.marginBottom || '0',
  justifyContent: props.justifyContent || 'center',
  alignItems: props.alignItems || 'flex-start',
  gap: props.gap || '0',
}))`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  gap: ${(props) => props.gap};
`;
