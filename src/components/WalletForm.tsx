import React, { useState } from 'react';
import { fetchEnsAddress, fetchEnsName } from '@wagmi/core';
import { motion } from 'framer-motion';

interface WalletFormProps {
  onSubmitAddress: (address: string) => void;
}

const WalletForm: React.FC<WalletFormProps> = ({ onSubmitAddress }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [resolved, setResolved] = useState('');
  const [ensName, setENSName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let resolvedValue = '';
      let ensResolvedName = '';
      if (input.endsWith('.eth')) {
        const resolvedENS = await fetchEnsAddress({ name: input });
        resolvedValue = String(resolvedENS);
        ensResolvedName = input;
      } else {
        const resolvedAddress = await fetchEnsName({ address: input as `0x${string}` });
        resolvedValue = input; 
        ensResolvedName = String(resolvedAddress);
      }
      setResolved(resolvedValue);
      setENSName(ensResolvedName); 
      setIsLoading(false);
      onSubmitAddress(resolvedValue); 
    } catch (error) {
      console.error('Error resolving address or ENS name:', error);
      // Handle the error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
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
            <form onSubmit={handleSubmit} className="form-control w-full">
                {!resolved && <div className="w-full text-center mb-16">
                    <span className="label-text text-5xl">Check your portfolio with a single click</span>
                </div>}
                {resolved && <div className="w-full text-center mb-16">
                    <span className="label-text text-2xl">{ensName || resolved}</span>
                </div>}
                {!resolved && <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Wallet Address or ENS name"
                        className="input input-bordered pl-4 pr-10 w-full"
                        required
                    />
                    <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none p-0 m-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>}
            </form>
        )}
    </div>
  );
};

export default WalletForm;