import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

function APIIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <Fragment>
      <span className='sr-only'>{t('icons.api')}</span>
      <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path d='M424 400c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm-88-24c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm64-144c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm176-72a47.758 47.758 0 01-6.438 24A47.758 47.758 0 01512 208v96a47.758 47.758 0 01-6.438 24A47.758 47.758 0 01512 352v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96a47.758 47.758 0 016.438-24A47.758 47.758 0 010 304v-96a47.758 47.758 0 016.438-24A47.758 47.758 0 010 160V64c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v96zm-464 0h416V64H48v96zm416 48H48v96h416v-96zm0 144H48v96h416v-96zm-64-216c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm-64 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z' />
      </svg>
    </Fragment>
  );
}

APIIcon.displayName = 'APIIcon';

export default APIIcon;