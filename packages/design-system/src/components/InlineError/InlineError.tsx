import React from 'react';
import classNames from 'classnames';
import { AlertCircleIcon } from '../Icons/AlertCircleIcon';
import { t } from '../i18n';

/**
 * <InlineError> is an internal component used by <FormLabel>
 * <InlineError> is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 */

interface InlineErrorProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  inversed?: boolean;
}

export function InlineError({
  children,
  className,
  id,
  inversed,
}: InlineErrorProps): React.ReactElement {
  const classes = classNames(
    'ds-c-inline-error',
    'ds-c-field__error-message',
    { 'ds-c-field__error-message--inverse': inversed },
    className
  );
  const viewbox = '36 -12 186 186';

  return (
    <span className={classes} id={id} aria-live="assertive" aria-atomic="true">
      <AlertCircleIcon viewBox={viewbox} />
      <span className="ds-u-visibility--screen-reader">{`${t('inlineError.prefix')}: `}</span>
      {children}
    </span>
  );
}

export default InlineError;
