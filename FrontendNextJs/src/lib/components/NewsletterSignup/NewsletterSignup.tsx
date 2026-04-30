'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  heading?: string | null;
  description?: string | null;
  buttonLabel?: string | null;
  placeholderText?: string | null;
}

export default function NewsletterSignup({
  heading = 'Stay in the loop',
  description,
  buttonLabel = 'Subscribe',
  placeholderText = 'you@example.com',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // Replace with your newsletter provider endpoint (Mailchimp, ConvertKit, etc.)
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <section className="relative overflow-hidden border-y border-zinc-100 bg-white py-16 md:py-20 dark:border-zinc-800 dark:bg-zinc-950">
      {/* Dot-grid texture matching CTA block */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:48px_48px] dark:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px] dark:block"
        aria-hidden="true"
      />

      <div className="relative container mx-auto max-w-2xl px-4 text-center">
        {/* Red accent bar */}
        <div className="mx-auto mb-6 h-0.5 w-16 bg-red-600" aria-hidden="true" />

        {heading && (
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
            {heading}
          </h2>
        )}

        {description && (
          <p className="mb-8 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        )}

        {status === 'success' ? (
          <div
            className="flex items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-900/50"
            role="status"
            aria-live="polite"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">
              You&apos;re subscribed — thanks for joining!
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholderText ?? 'you@example.com'}
                required
                autoComplete="email"
                disabled={status === 'loading'}
                className="min-w-0 flex-1 rounded-lg border border-zinc-200 bg-white px-4 py-2.5
                  text-zinc-900 placeholder:text-zinc-400
                  focus:border-transparent focus:ring-2 focus:ring-red-600 focus:outline-none
                  disabled:cursor-not-allowed disabled:opacity-50
                  dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50
                  dark:placeholder:text-zinc-500 dark:focus:ring-red-400"
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg
                  bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-zinc-50
                  transition-all duration-200
                  hover:bg-zinc-700
                  focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none
                  disabled:cursor-not-allowed disabled:opacity-50
                  dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white
                  dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950"
              >
                {status === 'loading' ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    <span>Subscribing…</span>
                  </>
                ) : (
                  buttonLabel
                )}
              </button>
            </form>

            {status === 'error' && (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">
                {errorMessage}
              </p>
            )}

            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
              No spam, ever. Unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
