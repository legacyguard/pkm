// Document types
export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  filePath: string;
  extractedText: string;
  deadlines: Deadline[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Deadline {
  id: string;
  documentId: string;
  date: Date;
  description: string;
  isCompleted: boolean;
  reminders: Reminder[];
}

export interface Reminder {
  id: string;
  deadlineId: string;
  scheduledFor: Date;
  type: ReminderType;
  isDelivered: boolean;
}

export enum DocumentType {
  INVOICE = 'invoice',
  CONTRACT = 'contract',
  INSURANCE = 'insurance',
  BILL = 'bill',
  OTHER = 'other'
}

export enum ReminderType {
  PUSH_NOTIFICATION = 'push_notification',
  CALENDAR_EVENT = 'calendar_event'
}
