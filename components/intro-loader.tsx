import {motion} from "framer-motion"
import {useState, useEffect} from "react"
export const Loader = () => {
const [showLoader, setShowLoader] = useState(true)

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setShowLoader(false)
  },5000)

  return () => clearTimeout(timeoutId)
},[])
    const headerVariants = {
        hidden:{
          opacity: 1
        },
        visible:{
          x: -256,
          y: -256,
          opacity: 0,
          transition:{
            delay: 4,
            duration: 2,
            ease: "easeInOut"
          }
        }
      }
      const pathVariant = {
        hidden:{
          opacity: 0,
          pathLength: 0
        },
        visible:{
          opacity: 1,
          pathLength: 1,
          transition:{
            duration: 2,
            ease: "easeInOut"
          }
        }
      }
      const pathVariant2 = {
        hidden:{
          opacity: 0,
          pathLength: 0
        },
        visible:{
          opacity: 1,
          pathLength: 1,
          transition:{
            duration: 4,
            ease: "easeInOut"
          }
        }
      }
      const pathVariant3 = {
        hidden:{
          opacity: 0,
          pathLength: 0
        },
        visible:{
          opacity: 1,
          pathLength: 1,
          transition:{
            duration: 6,
            ease: "easeInOut"
          }
        }
      }
      const pathVariant4 = {
        hidden:{
          opacity: 0,
          pathLength: 0
        },
        visible:{
          opacity: 1,
          pathLength: 1,
          transition:{
            duration: 3,
            ease: "easeInOut"
          }
        }
      }
      const pathVariant5 = {
        hidden:{
          opacity: 0,
          pathLength: 0
        },
        visible:{
          opacity: 1,
          pathLength: 1,
          transition:{
            duration: 6,
            ease: "easeInOut"
          }
        }
      }
    return showLoader ? (
        <div className="fixed right-0 top-0 left-0 w-full h-full bg-[#ffff] dark:bg-[#0a0a0a] z-[9999]">
        <div className="w-full h-full items-center justify-center">
        <motion.svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <g
          transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          stroke="none"
          className="text-[#0a0a0a] dark:text-[#ffff] fill-current"
        >
          <motion.path
             variants={pathVariant}
             initial="hidden"
             animate="visible"
            d="M626 3329 c-14 -11 -26 -18 -26 -14 0 5 -68 -73 -88 -100 -18 -27
-24 -124 -9 -172 10 -33 81 -126 89 -117 3 2 11 -2 18 -11 7 -8 21 -15 31 -15
11 0 19 -3 19 -7 0 -5 361 -7 801 -6 441 2 807 -1 813 -4 6 -4 27 -8 45 -9 19
0 37 -6 39 -13 2 -6 8 -9 13 -5 5 3 9 0 9 -6 0 -6 4 -9 9 -6 4 3 17 -5 29 -17
19 -21 73 -111 72 -122 0 -3 3 -6 6 -7 11 -5 6 466 -5 495 -6 16 -11 32 -11
36 0 13 -65 75 -101 96 -33 20 -54 20 -880 22 -843 3 -846 3 -873 -18z"
          />
          <motion.path
             variants={pathVariant2}
             initial="hidden"
             animate="visible"
            d="M3068 3345 c-2 -2 -19 -5 -38 -8 -19 -2 -52 -11 -72 -20 -20 -8 -39
-13 -42 -9 -3 3 -6 0 -6 -7 0 -7 -4 -9 -10 -6 -5 3 -10 1 -10 -4 0 -6 -5 -11
-11 -11 -14 0 -138 -102 -138 -114 -1 -4 -15 -26 -32 -47 -17 -21 -28 -39 -25
-39 4 0 -3 -18 -14 -40 -11 -22 -19 -40 -16 -40 2 0 -2 -20 -9 -44 -13 -43
-14 -229 -1 -286 10 -44 42 -127 59 -154 10 -14 18 -29 19 -33 1 -5 12 -16 25
-26 13 -10 21 -22 18 -26 -2 -5 7 -14 21 -22 14 -7 30 -21 35 -31 6 -10 14
-16 18 -13 5 2 14 -2 21 -10 7 -8 17 -15 23 -15 6 0 18 -7 27 -15 10 -9 30
-18 46 -21 15 -3 32 -8 38 -11 6 -4 98 -8 206 -10 107 -2 220 -5 250 -8 30 -2
96 -6 146 -8 97 -5 118 -12 159 -53 65 -65 70 -115 14 -173 -55 -58 -60 -59
-404 -62 -147 -2 -218 -6 -236 -15 -32 -16 -52 -60 -45 -100 2 -16 5 -32 5
-35 3 -20 74 -32 189 -33 106 -1 127 -4 127 -16 0 -12 -14 -15 -68 -15 -37 0
-67 -3 -67 -7 0 -5 -8 -8 -18 -8 -29 0 -52 -36 -52 -84 0 -82 38 -94 270 -85
96 4 219 8 273 10 53 1 97 6 97 11 0 5 4 6 10 3 5 -3 20 0 32 7 13 6 32 13 43
15 10 2 23 9 27 16 4 6 8 9 8 5 0 -4 12 4 26 17 14 13 29 23 33 22 6 -2 86 78
116 116 19 24 65 122 65 139 0 9 5 20 10 23 6 4 8 11 4 16 -3 5 0 17 7 25 9
11 10 46 6 132 -8 155 -13 175 -54 254 -33 64 -140 194 -151 184 -2 -3 -19 5
-36 18 -27 20 -55 35 -78 41 -5 2 -11 4 -15 5 -5 1 -12 3 -18 5 -5 1 -12 3
-15 4 -24 11 -86 14 -367 15 l-321 1 -40 25 c-61 38 -98 125 -67 156 8 9 15
23 15 31 0 9 3 14 6 10 3 -3 17 5 31 19 13 13 29 22 34 19 5 -4 9 -2 9 3 0 12
-6 12 277 16 146 3 255 1 258 -4 6 -11 82 -4 133 12 18 5 30 13 27 18 -3 5 0
10 6 12 7 2 13 22 14 44 1 38 -5 48 -59 92 -5 4 -48 6 -95 4 -47 -1 -92 1
-100 7 -26 17 0 31 59 31 93 0 121 20 124 90 1 32 -38 77 -75 85 -27 6 -655
15 -661 10z"
          />
          <motion.path
             variants={pathVariant3}
             initial="hidden"
             animate="visible"
            d="M3860 3319 c-17 -11 -28 -23 -25 -28 3 -5 1 -13 -5 -16 -6 -4 -8 -16
-5 -28 23 -83 35 -90 135 -87 52 1 69 6 87 23 23 23 26 35 24 79 -3 62 -140
100 -211 57z"
          />
          <motion.path
             variants={pathVariant4}
             initial="hidden"
             animate="visible"
            d="M1421 2700 c-62 -25 -107 -67 -127 -118 -17 -43 -19 -78 -19 -377 0
-375 2 -399 28 -440 26 -40 77 -87 107 -101 39 -17 133 -17 174 0 20 8 36 13
36 10 0 -3 17 11 38 30 20 20 41 36 45 36 5 0 5 5 2 10 -3 6 -1 10 6 10 7 0 9
3 6 7 -4 3 0 17 8 30 12 18 16 60 16 211 0 103 -2 198 -6 212 l-6 25 223 -1
c165 -1 232 2 256 12 17 7 32 11 32 8 0 -10 65 41 90 70 29 34 52 84 45 96 -3
5 -1 11 5 15 5 3 10 19 10 35 0 16 -5 32 -10 35 -6 4 -8 10 -5 15 5 8 -16 52
-51 106 -15 23 -40 40 -92 63 -15 7 -163 12 -399 14 -314 2 -381 0 -412 -13z"
          />
          <motion.path
             variants={pathVariant5}
             initial="hidden"
             animate="visible"
            d="M2908 1972 c-45 -2 -61 -8 -82 -29 -54 -53 -22 -137 57 -148 47 -7
130 8 135 25 2 6 9 16 16 23 14 13 11 59 -5 89 -15 28 -59 43 -121 40z"
          />
        </g>
      </motion.svg>
          </div>
      </div>
    ) : null
}