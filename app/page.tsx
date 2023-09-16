'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [randomPassword, setRandomPassword] = useState<string | null>(null)
	const generatePassword = () => {
		const charset =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		let result = ''
		const charsetLength = charset.length

		for (let i = 0; i < 10; i++) {
			const randomIndex = Math.floor(Math.random() * charsetLength)
			result += charset.charAt(randomIndex)
		}

		console.log(result)

		setRandomPassword(result)
	}
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-xl uppercase lg:flex'>
				<p className='fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4'>
					Password generator
				</p>
			</div>

			<div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] space-y-5">
				{randomPassword !== null && (
					<div className='font-mono bg-white rounded-md px-10 py-5 border border-1 border-gray'>
						{randomPassword}
					</div>
				)}
				<button
					className='py-2 px-3 text-lg font-medium text-center text-white bg-gradient-to-r from-violet-600 to-indigo-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:from-violet-700 hover:to-indigo-800 uppercase'
					onClick={generatePassword}>
					generate
				</button>
			</div>
		</main>
	)
}
