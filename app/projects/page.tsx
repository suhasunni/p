import React from 'react'

const projects = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-10 font-mono py-15">
        <h1 className="text-xl font-bold">Check out my [<a href="https://github.com/suhasunni" className="underline">GitHub</a>] to see more of my work.</h1>
        <div className="space-y-6">
            {/* star-nav */}
            <div className="border border-gray-300 p-6 rounded-xl w-[90%] max-w-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-1">Star-Nav</h2>
                <p className="text-gray-600">React • Django • Python • TypeScript</p>
                <p className="mt-2">Navigation system that provides navigation based on celestial bodies, leveraging real-time astronomical data and geolocation</p>
                [<a href="https://github.com/suhasunni/star-nav" className="underline mt-2 inline-block">Repo</a>]
            </div>

            {/* unni street */}
            <div className="border border-gray-300 p-6 rounded-xl w-[90%] max-w-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-1">Unni Street</h2>
                <p className="text-gray-600">Python • NumPy • Scikit-Learn • Pandas</p>
                <p className="mt-2">Stock recommender based on posts in <br/> r/wallstreetbets using a sentiment analysis model</p>
                [<a href="https://github.com/suhasunni/unni-street" className="underline mt-2 inline-block">Repo</a>]
            </div>

            {/* yt detector */}
            <div className="border border-gray-300 p-6 rounded-xl w-[90%] max-w-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-1">YouTube Profanity Detector</h2>
                <p className="text-gray-600">Selenium • Python</p>
                <p className="mt-2"> Web scraper that analyzes YouTube videos to detect and flag profanity</p>
                [<a href="https://github.com/suhasunni/YouTube-Profanity-Detector" className="underline mt-2 inline-block">Repo</a>]
            </div>

            {/* portfolio */}
            <div className="border border-gray-300 p-6 rounded-xl w-[90%] max-w-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-1">Personal Portfolio</h2>
                <p className="text-gray-600">NextJS • React • TypeScript</p>
                <p className="mt-2"> This website!</p>
                [<a href="https://github.com/suhasunni/p" className="underline mt-2 inline-block">Repo</a>]
            </div>
        </div>
</div>
  )
}

export default projects