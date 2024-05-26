'use client';

export default function UserItem() {
    return <div className="flex items-center justify-between gap-2 border rounded-[8px] p-4">
        <div className="avatar rounded-full h-10 w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>MS</p>
        </div>
        <div className="grow">
        <p className="text-[16px] font-bold">Shahril</p>
        <p className="text-[12px] text-neutral-500">test@test.com</p>
        </div>
    </div>
}