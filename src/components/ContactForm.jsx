import { useState } from 'react'
import { EMAIL } from '../lib/content'

// EMAIL set   → submit opens a mailto: link.
// EMAIL empty → submit shows "The email address has not been added yet."
export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [notice, setNotice] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL) {
      setNotice('The email address has not been added yet.')
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setNotice('Opening your email app…')
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate={false}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="font-mono text-xs font-medium uppercase tracking-wider text-mut">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          placeholder="Your name"
          className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-[0.95rem] text-ink placeholder:text-mut/70"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="font-mono text-xs font-medium uppercase tracking-wider text-mut">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-[0.95rem] text-ink placeholder:text-mut/70"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="font-mono text-xs font-medium uppercase tracking-wider text-mut">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={onChange}
          placeholder="Tell me about your idea or opportunity"
          className="w-full resize-y rounded-xl border border-line bg-bg px-4 py-3 text-[0.95rem] text-ink placeholder:text-mut/70"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-ink px-6 py-3 font-display text-sm font-bold tracking-wide text-bg transition hover:-translate-y-0.5"
        >
          SEND MESSAGE
        </button>
        <p role="status" aria-live="polite" className="text-sm text-mut">
          {notice}
        </p>
      </div>
    </form>
  )
}
