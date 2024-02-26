import React from 'react';
import { motion } from 'framer-motion';
import type { Balance} from '../pages/api/wallet';

interface DashboardProps {
  assets: Balance[];
  onRefresh: () => void;
  isLoading: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ assets, onRefresh, isLoading }) => {
  return (
    <div>
        {isLoading ? (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            </motion.div>
        ) : (
            <div>
                <div className="flex justify-end items-center w-full mb-4">
                    <button type="button" onClick={onRefresh} className="flex items-center">
                    <span className="label-text text-2xl mr-2">Refresh Balances</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    </button>
                </div>
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
            </div>
        )}
    </div>
  );
};

export default Dashboard;