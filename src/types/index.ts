// Core Document types
export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  filePath: string;
  extractedText: string;
  deadlines: Deadline[];
  tags: string[];
  isEncrypted: boolean;
  familyShared: boolean;
  createdAt: Date;
  updatedAt: Date;
  metadata: DocumentMetadata;
}

export interface Deadline {
  id: string;
  documentId: string;
  date: Date;
  description: string;
  importance: DeadlineImportance;
  isCompleted: boolean;
  completedAt?: Date;
  reminders: Reminder[];
  category: DeadlineCategory;
}

export interface Reminder {
  id: string;
  deadlineId: string;
  scheduledFor: Date;
  type: ReminderType;
  isDelivered: boolean;
  deliveredAt?: Date;
  message: string;
}

export enum DocumentType {
  INVOICE = 'invoice',
  CONTRACT = 'contract',
  INSURANCE = 'insurance',
  BILL = 'bill',
  LEGAL = 'legal',
  MEDICAL = 'medical',
  FINANCIAL = 'financial',
  GOVERNMENT = 'government',
  OTHER = 'other'
}

export enum DeadlineImportance {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export enum DeadlineCategory {
  PAYMENT = 'payment',
  RENEWAL = 'renewal',
  SUBMISSION = 'submission',
  EXPIRATION = 'expiration',
  APPOINTMENT = 'appointment',
  OTHER = 'other'
}

export enum ReminderType {
  PUSH_NOTIFICATION = 'push_notification',
  CALENDAR_EVENT = 'calendar_event',
  EMAIL = 'email',
  SMS = 'sms'
}

export interface DocumentMetadata {
  size: number;
  mimeType: string;
  resolution?: { width: number; height: number };
  pages?: number;
  extractionConfidence: number;
  processingTime: number;
  aiModelUsed: string;
}

// Family and User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  preferences: UserPreferences;
  devices: Device[];
}

export interface Family {
  id: string;
  name: string;
  members: FamilyMember[];
  sharedDocuments: string[]; // Document IDs
  permissions: FamilyPermissions;
}

export interface FamilyMember {
  userId: string;
  role: FamilyRole;
  permissions: MemberPermissions;
  joinedAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer'
}

export enum FamilyRole {
  PARENT = 'parent',
  ADULT = 'adult',
  TEEN = 'teen',
  CHILD = 'child'
}

// Security and Privacy types
export interface EncryptionKey {
  id: string;
  algorithm: string;
  keyData: string;
  createdAt: Date;
  expiresAt?: Date;
}

export interface EmergencyAccess {
  id: string;
  trustedContacts: TrustedContact[];
  emergencyKit: EmergencyKit;
  activationTriggers: EmergencyTrigger[];
}

export interface TrustedContact {
  id: string;
  name: string;
  email: string;
  relationship: string;
  accessLevel: EmergencyAccessLevel;
  notificationMethods: NotificationMethod[];
}

// Integration types
export interface Integration {
  id: string;
  name: string;
  type: IntegrationType;
  isConnected: boolean;
  credentials: IntegrationCredentials;
  lastSync: Date;
  settings: IntegrationSettings;
}

export enum IntegrationType {
  BANKING = 'banking',
  CALENDAR = 'calendar',
  EMAIL = 'email',
  CLOUD_STORAGE = 'cloud_storage',
  ACCOUNTING = 'accounting'
}

// Template types
export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  fields: TemplateField[];
  extractionRules: ExtractionRule[];
  validationRules: ValidationRule[];
  createdBy: string;
  isPublic: boolean;
  downloads: number;
  rating: number;
  version: string;
}

export interface TemplateField {
  id: string;
  name: string;
  type: FieldType;
  required: boolean;
  defaultValue?: string;
  validation?: string;
}

export enum FieldType {
  TEXT = 'text',
  DATE = 'date',
  NUMBER = 'number',
  CURRENCY = 'currency',
  EMAIL = 'email',
  PHONE = 'phone',
  SELECT = 'select',
  MULTISELECT = 'multiselect'
}

// Analytics and Metrics types
export interface SuccessMetrics {
  deadlinesCaptured: number;
  deadlinesCompleted: number;
  averageProcessingTime: number;
  successRate: number;
  moneySaved: number;
  timeBeforeDeadlineAverage: number;
  documentTypesProcessed: Record<DocumentType, number>;
  monthlyTrends: MonthlyMetric[];
}

export interface MonthlyMetric {
  month: string;
  deadlinesCaptured: number;
  deadlinesCompleted: number;
  successRate: number;
  moneySaved: number;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
