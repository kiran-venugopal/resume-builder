'use client';

import { useResumeStore } from "@/zustand/useResumeStore";
import React, { useState } from "react";

export default function PersonalInfoForm() {
    const name = useResumeStore((state) => state.resumeData.name);
    const titles = useResumeStore((state) => state.resumeData.titles);
    const location = useResumeStore((state) => state.resumeData.location);
    const email = useResumeStore((state) => state.resumeData.email);
    const phone = useResumeStore((state) => state.resumeData.phone);
    const updatePersonalInfo = useResumeStore(state => state.updatePersonalInfo);

    // Local input for adding titles
    const [titleInput, setTitleInput] = useState("");

    const addTitle = (t?: string) => {
        const val = (t ?? titleInput).trim();
        if (!val) return;
        const next = Array.from(new Set([...(titles ?? []), val]));
        updatePersonalInfo({ titles: next });
        setTitleInput("");
    };

    const removeTitle = (index: number) => {
        const next = titles.filter((_, i) => i !== index);
        updatePersonalInfo({ titles: next });
    };

    return (
        <section className="space-y-4 p-4 bg-white rounded-md shadow-sm">
            <h3 className="text-lg font-medium">Personal Info</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Full name</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2 text-sm"
                        value={name}
                        onChange={(e) => updatePersonalInfo({ name: e.target.value })}
                        placeholder="MICHAEL HARRIS"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2 text-sm"
                        value={location}
                        onChange={(e) => updatePersonalInfo({ location: e.target.value })}
                        placeholder="Sydney, Australia"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border rounded px-3 py-2 text-sm"
                        value={email}
                        onChange={(e) => updatePersonalInfo({ email: e.target.value })}
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                        type="tel"
                        className="w-full border rounded px-3 py-2 text-sm"
                        value={phone}
                        onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
                        placeholder="+61 2323232323"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Titles / Roles</label>
                <div className="flex gap-2 mb-2 flex-wrap">
                    {(titles ?? []).map((t, i) => (
                        <span
                            key={t + i}
                            className="inline-flex items-center gap-2 bg-gray-100 text-sm px-2 py-1 rounded-full"
                        >
                            <span>{t}</span>
                            <button
                                type="button"
                                onClick={() => removeTitle(i)}
                                className="text-xs text-gray-600 hover:text-red-600"
                                aria-label={`Remove ${t}`}
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        className="flex-1 border rounded px-3 py-2 text-sm"
                        placeholder="Add a title and press Enter (e.g. SEO)"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                addTitle();
                            }
                        }}
                    />
                    <button
                        type="button"
                        className="px-3 py-2 bg-blue-600 text-white rounded text-sm"
                        onClick={() => addTitle()}
                    >
                        Add
                    </button>
                </div>
            </div>
        </section>
    );
}