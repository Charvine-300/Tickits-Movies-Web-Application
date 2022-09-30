import styled from 'styled-components';
import { TextProps } from '../../../types'
import { font, theme } from '../../../assets/utils/variables'

export const Text = styled.span<TextProps>`
  font-size: ${(props) => font.sizes[props.size ?? 'base']};
  color: ${(props) => props.color || theme.white[100]};
  font-weight: ${(props) => props.weight || font.weights.normal};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
`;

export const H1 = styled.h1<TextProps>`
  font-size: ${font.sizes.xxxl};
  font-family: ${(props) => props.font === 'primary' ? font.family.primary : font.family.secondary};
  font-weight: ${font.weights.bold};
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => props.color || theme.white[100]};
  margin: ${(props) => props.margin || '0.5rem 0'};
  max-width: 100%;
`;

export const Paragraph = styled.p<TextProps>`
  font-size: ${(props) => font.sizes[props.size ?? 'base'] || font.sizes.base};
  font-family: ${(props) => props.font === 'primary' ? font.family.primary : font.family.secondary};
  color: ${(props) => props.color || theme.white[100]};
  font-weight: ${(props) =>
    font.weights[props.weight ?? 'normal'] || font.weights.normal};
  text-align: ${(props) => props.align || 'left'};
  margin: ${props => props.margin || '0.5rem 0'};
  max-width:${props => props.width || '100%'};
  overflow: hidden;
  white-space:no-wrap;
  text-overflow: ellipsis;
`;

export const H2 = styled.h2<TextProps>`
 font-size: ${font.sizes.xxl};
  font-weight: ${font.weights.bold};
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => props.color || theme.black[100]};
  margin: ${(props) => props.margin || '0.5rem 0'};
`;
export const H3 = styled.h3<TextProps>`
  font-size: ${font.sizes.xl};
  font-weight: ${font.weights.semibold};
  color: ${(props) => props.color || theme.black[100]};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
  max-width: 100%;
`;
export const H4 = styled.h4<TextProps>`
  font-size: 1.75rem;
  font-weight: ${font.weights.bold};
  color: ${(props) => props.color || theme.black[100]};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
  max-width: 100%;
`;
export const H5 = styled.h5<TextProps>`
  font-size: ${font.sizes.lg};
  font-weight: ${font.weights.bold};
  color: ${(props) => props.color || theme.black[100]};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
  max-width: 100%;
`;

export const H6 = styled.h6<TextProps>`
  font-size: 1.2rem;
  color: ${(props) => props.color || theme.black[100]};
  font-weight: ${font.weights.bold};
  margin: ${(props) => props.margin || '0.5rem 0'};
  text-align: ${(props) => props.align || 'left'};
`;
