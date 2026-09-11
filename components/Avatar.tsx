'use client';
export default function Avatar({speaking}:{speaking:boolean}){return <div className={`avatar ${speaking?'speaking':''}`} aria-label="Avatar da tutora"><div className="face"><div className="hair"/><div className="eye l"/><div className="eye r"/><div className="mouth"/></div></div>}
