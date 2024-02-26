import React from 'react';
import type { Balance} from '../pages/api/wallet';

interface DashboardProps {
  assets: Balance[];
}

const Dashboard: React.FC<DashboardProps> = ({ assets }) => {
  return (
    <div className="container mx-auto p-6 bg-[#30333C] rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 py-4">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
                <h2 className="text-xl font-bold text-white-700">Wallet</h2>
            </div>
            <span className="text-xl font-bold text-white-700">$27,336</span>
        </div>
        <table className="w-full">
            <thead>
            <tr className="text-left bg-[#1D232A]">
                <th className='py-2 px-4'>Token</th>
                <th className='py-2 px-4'>Price</th>
                <th className='py-2 px-4'>Amount</th>
                <th className='py-2 px-4'>USD Value</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {/* Map through your assets here */}
            {assets.map((asset, index) => (
                <tr key={index}>
                    <td className='p-4'>{asset.token}</td>
                    <td className='p-4'>${asset.tokenPrice}</td>
                    <td className='p-4'>{asset.amount}</td>
                    <td className='p-4'>{Math.round(Number(asset.amount) * Number(asset.tokenPrice))}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
  );
};

export default Dashboard;