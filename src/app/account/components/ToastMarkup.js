import { Toast } from '@shopify/polaris';

export default function ToastMarkup({ activeToast, onToggleToast }) {
  return (
    <>
      {activeToast ? (
        <Toast content='Account updated' onDismiss={onToggleToast} />
      ) : null}
    </>
  );
}
