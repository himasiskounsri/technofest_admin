export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };

    user: User;
    users: User[];

    manager: User;
    managers: User[];

    participant: User;
    participants: User[];

    userProfile: UserProfile;
    userProfiles: UserProfile[];

    event: Event;
    events: Event[];

    registration: EventRegistration;
    registrations: EventRegistration[];

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
    email_verified_at: string;
    role: number;
    event_registrations?: EventRegistration[];
    avatar: Avatar;
    event_registrant?: EventRegistrant;
    created_at: string;
    updated_at: string;

    event_registrations_count?: number;
}

export interface Faq {
    id: string;
    question: string;
    answer: string;
    is_highlighted: boolean;
    user: User;
    created_at: string;
    updated_at: string;
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
    created_at: string;
    updated_at: string;
}

export interface SeminarCast {
    id: string;
    name: string;
    title?: string;
    image?: string;
    role?: number;
    seminar: Seminar;
    created_at: string;
    updated_at: string;
}

export interface Seminar {
    id: string;
    event: Event;
    created_at: string;
    updated_at: string;
}

export interface Competition {
    id: string;
    event: Event;
    max_participants: number;
    created_at: string;
    updated_at: string;
}

export interface ContactPerson {
    id: string;
    name: string;
    whatsapp?: string;
    line?: string;
    instagram?: string;
    is_global: boolean;
    event?: Event;
    created_at: string;
    updated_at: string;
}

export interface Milestone {
    id: string;
    name: string;
    date: string;
    description?: string;
    is_global: boolean;
    event?: Event;
    created_at: string;
    updated_at: string;
}

export interface EventRegistrationPayment {
    id: string;
    uid: string;
    event_registration: EventRegistration;
    status: number;
    payment_proof?: string;
    created_at: string;
    updated_at: string;
}

export interface EventRegistration {
    id: string;
    uid: string;
    users: User[];
    event_registrant: EventRegistrant;
    name: string;
    event: Event;
    created_at: string;
    updated_at: string;
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
    held_on?: string;
    created_at: string;
    updated_at: string;
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
    created_at: string;
    updated_at: string;
}

export interface Avatar {
    id: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface EventRegistrant {
    id: string;
    role: number;
    user: User;
    event_registration: EventRegistration;
    created_at: string;
    updated_at: string;
}
