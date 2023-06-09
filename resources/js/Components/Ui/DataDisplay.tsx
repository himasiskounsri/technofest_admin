import React from "react";

interface DataDisplayProps {
    children: React.ReactNode;
}

export const DataDisplay = ({ children }: DataDisplayProps) => {
    return <div>{children}</div>;
};

interface DataDisplayHeaderProps {
    children: React.ReactNode;
}

export const DataDisplayHeader = ({ children }: DataDisplayHeaderProps) => {
    return <div className="px-4 sm:px-0">{children}</div>;
};

interface DataDisplayTitleProps {
    children: React.ReactNode;
}

export const DataDisplayTitle = ({ children }: DataDisplayTitleProps) => {
    return (
        <h3 className="text-base font-semibold leading-7 text-gray-900">
            {children}
        </h3>
    );
};

interface DataDisplayDescriptionProps {
    children: React.ReactNode;
}

export const DataDisplayDescription = ({
    children,
}: DataDisplayDescriptionProps) => {
    return (
        <p className="max-w-2xl text-sm leading-6 text-gray-500">{children}</p>
    );
};

interface DataDisplayContentProps {
    children: React.ReactNode;
}

export const DataDisplayContent = ({ children }: DataDisplayContentProps) => {
    return (
        <div className="mt-6 border-t border-gray-100">
            <dl className="flex flex-col divide-y divide-gray-100">
                {children}
            </dl>
        </div>
    );
};

interface DataDisplayItemProps {
    keyName: string;
    children: React.ReactNode;
}

export const DataDisplayItem = ({
    keyName,
    children,
}: DataDisplayItemProps) => {
    return (
        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <p className="text-sm font-medium leading-6 text-gray-900">
                {keyName}
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {children || <span className="text-muted-foreground">-</span>}
            </p>
        </div>
    );
};
