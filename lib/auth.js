import { createHmac, timingSafeEqual, scryptSync, randomBytes } from 'crypto';
export function sign(value){return createHmac('sha256',process.env.ADMIN_SESSION_SECRET||'').update(value).digest('hex')}
export function validSession(req){const token=req.cookies?.get('efasa_admin')?.value||'';if(!token||!process.env.ADMIN_SESSION_SECRET)return false;const [exp,sig]=token.split('.');if(!exp||!sig||Number(exp)<Date.now())return false;const expected=sign(exp);try{return timingSafeEqual(Buffer.from(sig),Buffer.from(expected))}catch{return false}}
export function requireAdmin(req){if(!validSession(req))throw new Error('UNAUTHORIZED')}
export function makePasswordHash(password,salt=randomBytes(16).toString('hex')){return {salt,hash:scryptSync(password,salt,64).toString('hex')}}
export function verifyPassword(password,salt,hash){try{return timingSafeEqual(scryptSync(password,salt,64),Buffer.from(hash,'hex'))}catch{return false}}
