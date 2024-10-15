
import { Mail } from '@/app/(inventory)/mail/data'; // Importing Mail for potential use

interface MailDisplayProps {
  mail: Mail ; // Define the type for mail
}

export function MailDisplay({ mail }: MailDisplayProps) {
 

  return <div>{mail?.dataTable}</div>
}