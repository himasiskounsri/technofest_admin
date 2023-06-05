export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };

    user: User;
    users: User[];

    userProfile: UserProfile;
    userProfiles: UserProfile[];

    event: Event;
    events: Event[];

    eventRegistration: EventRegistration;
    eventRegistrations: EventRegistration[];

    payment: EventRegistrationPayment;
    payments: EventRegistrationPayment[];

    milestone: Milestone;
    milestones: Milestone[];

    contactPerson: ContactPerson;
    contactPeople: ContactPerson[];

    competition: Competition;
    competitions: Competition[];

    seminar: Seminar;
    seminars: Seminar[];

    seminarCast: SeminarCast;
    seminarCasts: SeminarCast[];

    faq: Faq;
    faqs: Faq[];

    festival: Festival;
};

export interface User {
    id: string;
    uid: string;
    name: string;
    email: string;
    email_verified_at: Date;
    role: number;
    event_registrations?: EventRegistration[];
    avatar: Avatar;
    created_at: Date;
    updated_at: Date;
}

export interface Faq {
    id: string;
    question: string;
    answer: string;
    is_highlighted: boolean;
    created_by: User;
    created_at: Date;
    updated_at: Date;
}

export interface Festival {
    id: string;
    period: string;
    name: string;
    theme?: string;
    description?: string;
    start_date: string;
    end_date: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface SeminarCast {
    id: string;
    name: string;
    title?: string;
    image?: string;
    role?: number;
    seminar: Seminar;
    created_at: Date;
    updated_at: Date;
}

export interface Seminar extends Event {
    id: string;
    created_at: Date;
    updated_at: Date;
}

export interface Competition extends Event {
    id: string;
    max_participants: number;
    created_at: Date;
    updated_at: Date;
}

export interface ContactPerson {
    id: string;
    name: string;
    whatsapp?: string;
    line?: string;
    instagram?: string;
    is_global: boolean;
    event?: Event;
    created_at: Date;
    updated_at: Date;
}

export interface Milestone {
    id: string;
    name: string;
    date: Date;
    description?: string;
    is_global: boolean;
    event?: Event;
    created_at: Date;
    updated_at: Date;
}

export interface EventRegistrationPayment extends EventRegistration {
    id: string;
    uid: string;
    status: number;
    payment_proof?: string;
    created_at: Date;
    updated_at: Date;
}

export interface EventRegistration extends Event {
    id: string;
    uid: string;
    created_at: Date;
    updated_at: Date;
}

export interface Event {
    id: string;
    name: string;
    type: number;
    description?: string;
    image?: string;
    is_opened: boolean;
    price?: number;
    held_in?: string;
    held_on?: Date;
    created_at: Date;
    updated_at: Date;
}

export interface UserProfile {
    id: string;
    whatsapp?: string;
    line?: string;
    instagram?: string;
    institution?: string;
    gender?: number;
    photo: string;
    user: User;
    created_at: Date;
    updated_at: Date;
}

export interface Avatar {
    id: string;
    image: string;
    created_at: Date;
    updated_at: Date;
}
