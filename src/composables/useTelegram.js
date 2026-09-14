import { contacts } from '@/data/contacts'

export function useTelegram() {
  const openChannel = () => {
    window.open(contacts.telegram, '_blank', 'noopener')
  }

  const openWithMessage = (text) => {
    const url = `${contacts.telegram}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener')
  }

  return { openChannel, openWithMessage, contacts }
}