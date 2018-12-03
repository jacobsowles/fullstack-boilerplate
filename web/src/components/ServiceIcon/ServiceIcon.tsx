import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';

import './ServiceIcon.scss';

export interface ServiceIconProps {
  className?: string;
  iconName: 'github';
  label?: string;
  size?:
    | 'xs'
    | 'sm'
    | 'lg'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | undefined;
}

const ServiceIcon: React.FunctionComponent<ServiceIconProps> = ({
  children,
  className,
  iconName,
  label,
  size,
  ...rest
}) => {
  const icons: IconProp[] = [{ iconName: 'github', prefix: 'fab' }];
  let selectedIcon = icons.find(i => i.iconName === iconName);

  if (!selectedIcon) {
    selectedIcon = {
      iconName: 'question-circle',
      prefix: 'far'
    };
  }

  return (
    <div className={classNames('service-icon', className)}>
      <FontAwesomeIcon icon={[selectedIcon.prefix, selectedIcon.iconName]} size={size} {...rest} />
      {label && <p className="service-icon-label">{label}</p>}
    </div>
  );
};

ServiceIcon.defaultProps = {
  className: undefined,
  label: undefined,
  size: '4x'
};

interface IconProp {
  prefix: any;
  iconName: any;
}

export default ServiceIcon;