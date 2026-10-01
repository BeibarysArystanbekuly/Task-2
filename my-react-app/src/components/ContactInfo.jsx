function ContactInfo() {
  return (
    <section className="contact-panel" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Information</h2>
      <ul>
        <li>
          <a href="https://github.com/BeibarysArystanbekuly">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.769-.244.769-.542 0-.267-.01-.975-.015-1.913-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.023-.7.078-.686.078-.686 1.13.08 1.725 1.16 1.725 1.16 1.006 1.724 2.64 1.226 3.283.938.102-.729.394-1.226.716-1.508-2.499-.284-5.126-1.25-5.126-5.563 0-1.229.44-2.232 1.16-3.02-.117-.285-.503-1.429.11-2.978 0 0 .945-.303 3.094 1.154A10.79 10.79 0 0 1 12 6.183c.956.004 1.918.129 2.817.378 2.147-1.457 3.09-1.154 3.09-1.154.615 1.549.23 2.693.113 2.978.721.788 1.158 1.791 1.158 3.02 0 4.324-2.632 5.276-5.139 5.555.404.35.765 1.043.765 2.1 0 1.517-.014 2.741-.014 3.113 0 .3.202.65.774.54A11.252 11.252 0 0 0 12 .75Z" />
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/giguratt/">
            <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </li>
      </ul>
    </section>
  )
}

export default ContactInfo
