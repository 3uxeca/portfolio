'use client'
import AboutContents from '@/components/about/AboutContents'
import useTypeword from '@/hooks/useTypeWord'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const controls = useAnimation();

  const onBoardText = useTypeword('Work hard, play hard together!', 45);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setShowInitialMessage(false);
      controls.start('visible');
      document.body.style.overflow = '';
    }, 2700);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [controls]);

  useEffect(() => {
    if(!showInitialMessage) {
      controls.start('visible');
    }
  }, [showInitialMessage, controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.7,
      },
    },
  };

  const messageItemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.8,
      },
    },
  };  
  
  return (
    <>
      <AnimatePresence>
        {showInitialMessage && (
          <motion.div
            className='flexColBox'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <p className="title">{onBoardText}</p>
            <motion.span
              className='desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              프론트엔드 개발자 <span className="font-bold">사지혜</span>
              입니다.
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence> 
      {
        !showInitialMessage &&
        <AboutContents />
      }   
    </>
  )
}

export default AboutPage