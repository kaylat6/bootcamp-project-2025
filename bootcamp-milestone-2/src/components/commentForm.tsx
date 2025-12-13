'use client'
import {useState} from 'react';

export default async function CommentForm({slug}: {slug:string}) {
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');

    await fetch('/api/blog/${slug}/comment', {
        method: 'POST',
        body: JSON.stringify({user, comment})
    });
    
}
