import React, { useState } from 'react'
import JobCard from './JobCard'

function Jobs({ jobs, loggedIn, currentCandidate, onApply }) {
    const [hideAlert, setHideAlert] = useState("hidden")

    const jobCards = jobs.map((job) => {
        return <JobCard key={job.id} job={job} loggedIn={loggedIn} currentCandidate={currentCandidate} onApply={onApply} setHideAlert={setHideAlert} />
    })

    function handleAlert() {
        setHideAlert("hidden")
    }

    return (
        <div className='mb-40 bg-gray-200 bg-opacity-50 pt-1  h-full'>
            <div className='w-3/4 pt-12'>
                <div className={hideAlert}>
                    <div id="alert-3" class="fixed top-0 flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-500" role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Info</span>
                        <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                            You have successfully applied!
                        </div>
                        <button onClick={handleAlert} type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
                            <span class="sr-only">Close</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className=' inline-grid frid-row-auto gap-10 grid-cols-3 grid-rows-4 gap-3 mt-10'>
                {jobCards }
            </div>
            </div>
      
    )
}

export default Jobs