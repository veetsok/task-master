import { CSSProperties } from "styled-components";

export interface ProjectWidgetProps {
  author?: string;
  date?: string;
  uid?: string;
  title?: string;
  description?: string;
  handleDeleteProject?: () => void;
  onClick?: () => void;
  isLoading?: boolean;
  custom?: CSSProperties;
}
