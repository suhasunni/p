import React from 'react'

const experience = () => {
  return (
    <>
        <div className='py-15'>
            <h1 className='text-2xl font-semibold text-gray-800 leading-snug text-center font-mono'>
                1/6 internships done - but who&apos;s counting? (Me. I am.)
            </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pt-10 font-mono">
            <li>
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2024</time>
                <div className="text-lg font-black">Plooto Inc</div>
                QA Engineer for the Growth team at a SaaS startup in Toronto 🛠️
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end md:mb-10">
                <time className="font-mono italic">2025</time>
                <div className="text-lg font-black">UW Orbital</div>
                Software Engineer for Waterloo&apos;s satellite design team 🛰
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">202?</time>
                <div className="text-lg font-black">{"\{404 Error\}"}</div>
                Future company loading... stay tuned for the shocking result ⚡
                </div>
            </li>
            </ul>
        </div>

    </>
  )
}

export default experience