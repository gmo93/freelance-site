'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Keyboard() {
  const testerArray = ['h', 'e', 'r', 'e', ' ', 'w', 'e', ' ', 'g', 'o', '!'];
  const testerString = 'Where can I possibly find a web designer??';
  const filledArr: any = [];

  const [quote, setQuote] = useState('');
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(0);
  const [letter, setLetter] = useState('');
  const [prevLetter, setPrevLetter] = useState('');

  const cls1 = {
    letterSpacing: '-.01em',
  };
  const cls2 = {
    letterSpacing: '-.01em',
  };
  const cls3 = {
    letterSpacing: '-.01em',
    fill: '#facc15',
    stroke: '#231f20',
    strokeMiterLimit: '10',
  };
  const cls4 = {
    letterSpacing: '-.06em',
  };
  const cls5 = {
    fontSize: '22px',
  };
  const cls6 = {
    fill: '#231f20',
    fontFamily: 'DINCondensed-Bold',
    fontWeight: 700,
    fontSize: '18px',
  };
  const keyboard = {
    marginTop: '20vh',
  };

  const keyPress = (e: any) => {
    console.log(e.target);
  };

  const mouseHover = (e: any) => {
    e.target.style.fill = '#cfa910';
  };
  const mouseLeave = (e: any) => {
    e.target.style.fill = '#facc15';
  };

  useEffect(() => {
    // console.log(testerString[count]);

    const intervalId = setInterval(() => {
      setCount(count + 1);
      if (count > testerString.length - 1) {
        setActive(false);
        // document.getElementById('')
      }
      console.log(letter)
      if (testerString[count] === ' ') {
        setLetter('space');
      } else {
        setLetter(testerString[count]);
        setPrevLetter(testerString[count - 1]);
        if (letter && letter !== 'space') {
          document.getElementById(letter).style.fill = '#cfa910';
        }
        if (prevLetter === "space") {
            document.getElementById('space').style.fill = '#fcca15';
        }
      }
      // console.log(testerString[count])
      setQuote((prev) => prev + testerString[count]);
    }, 100);

    if (count > testerString.length - 1) {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <div className="flex flex-wrap h-full w-screen justify-center items-start">
        <h1 className="mt-28 text-2xl">Omohundro Web Design</h1>
        <div className="w-5/6 h-1/6 bg-white border-2">{quote}</div>
        <svg
          onClick={keyPress}
          style={keyboard}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 906.15 324.49"
        >
          <g id="Layer_3">
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="0"
              x="58.62"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="1"
              x="124.47"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="2"
              x="190.97"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="3"
              x="257.48"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="4"
              x="323.99"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="5"
              x="389.83"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="6"
              x="454.35"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="7"
              x="521.52"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="8"
              x="588.03"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="9"
              x="654.21"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="10"
              x="720.71"
              y="4.36"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="11"
              x="786.89"
              y="4.36"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="12"
              x="853.11"
              y="5.11"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="13"
              x="2.58"
              y="5.11"
              width="42.42"
              height="56.03"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="14"
              x="64.28"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="w"
              x="130.12"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="e"
              x="196.63"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="r"
              x="263.14"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="18"
              x="329.64"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="y"
              x="395.49"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="20"
              x="460"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="i"
              x="527.17"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="o"
              x="593.68"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="p"
              x="659.86"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="24"
              x="725.67"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="25"
              x="858.02"
              y="70.44"
              width="47.59"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="26"
              x="792.85"
              y="70.44"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="27"
              x="2.58"
              y="70.44"
              width="48.06"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="a"
              x="78.24"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="s"
              x="144.09"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="d"
              x="210.59"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="f"
              x="277.1"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="g"
              x="343.61"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="h"
              x="409.45"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="473.97"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="541.14"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="l"
              x="607.65"
              y="135.77"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="673.07"
              y="136.02"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="739.58"
              y="136.02"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="805"
              y="136.52"
              width="99.55"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="2.58"
              y="135.77"
              width="61.7"
              height="56.53"
            />
            <text style={cls5} transform="translate(95.38 169.64)">
              <tspan x="0" y="0">
                A
              </tspan>
            </text>
            <text style={cls5} transform="translate(161.23 170.14)">
              <tspan x="0" y="0">
                S
              </tspan>
            </text>
            <text style={cls5} transform="translate(225.94 169.64)">
              <tspan x="0" y="0">
                D{' '}
              </tspan>
            </text>
            <text style={cls5} transform="translate(292.73 170.14)">
              <tspan x="0" y="0">
                F
              </tspan>
            </text>
            <text style={cls5} transform="translate(358.29 170.14)">
              <tspan x="0" y="0">
                G{' '}
              </tspan>
            </text>
            <text style={cls5} transform="translate(426.8 170.14)">
              <tspan x="0" y="0">
                H
              </tspan>
            </text>
            <text style={cls5} transform="translate(492.43 169.64)">
              <tspan x="0" y="0">
                J
              </tspan>
            </text>
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="116.83"
              y="202.28"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="2.58"
              y="202.1"
              width="99.55"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="182.68"
              y="202.28"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="c"
              x="249.18"
              y="202.28"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="315.69"
              y="202.28"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="b"
              x="382.2"
              y="202.28"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="n"
              x="448.04"
              y="202.28"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="513.82"
              y="201.61"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="579.6"
              y="201.61"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="645.44"
              y="201.61"
              width="52.54"
              height="56.53"
            />
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="711.92"
              y="201.61"
              width="52.54"
              height="56.53"
            />
            <text style={cls3} id="" transform="translate(134.78 236.15)">
              <tspan x="0" y="0">
                Z
              </tspan>
            </text>
            <text style={cls5} transform="translate(29.52 239.47)">
              <tspan x="0" y="0">
                Shift
              </tspan>
            </text>
            <text style={cls5} transform="translate(13.28 104.81)">
              <tspan className="cls-4" x="0" y="0">
                T
              </tspan>
              <tspan x="5.94" y="0">
                ab
              </tspan>
            </text>
            <text style={cls5} transform="translate(9.91 161.88)">
              <tspan x="0" y="0">
                Caps
              </tspan>
              <tspan x=".34" y="20">
                Lo
              </tspan>
              <tspan className="cls-1" x="16.62" y="20">
                c
              </tspan>
              <tspan x="24.5" y="20">
                k
              </tspan>
            </text>
            <text style={cls5} transform="translate(837.06 173.23)">
              <tspan x="0" y="0">
                Enter
              </tspan>
            </text>
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id=""
              x="778.4"
              y="202.52"
              width="66.02"
              height="56.53"
            />
            <text style={cls5} transform="translate(793.03 239.47)">
              <tspan x="0" y="0">
                Shift
              </tspan>
            </text>
            <text style={cls5} transform="translate(200.01 236.65)">
              <tspan x="0" y="0">
                X
              </tspan>
            </text>
            <text style={cls5} transform="translate(264.74 236.15)">
              <tspan x="0" y="0">
                C{' '}
              </tspan>
            </text>
            <text style={cls5} transform="translate(330.92 236.65)">
              <tspan x="0" y="0">
                V{' '}
              </tspan>
            </text>
            <text style={cls5} transform="translate(396.88 236.65)">
              <tspan x="0" y="0">
                B{' '}
              </tspan>
            </text>
            <text style={cls5} transform="translate(465.19 236.65)">
              <tspan x="0" y="0">
                N
              </tspan>
            </text>
            <text style={cls5} transform="translate(528.57 236.15)">
              <tspan x="0" y="0">
                M
              </tspan>
            </text>
            <text style={cls5} transform="translate(588.95 225.34)">
              <tspan x="0" y="0">
                &lt;
              </tspan>
            </text>
            <text style={cls5} transform="translate(654.59 226.34)">
              <tspan x="0" y="0">
                &gt;
              </tspan>
            </text>
            <text style={cls5} transform="translate(725.5 228.17)">
              <tspan x="0" y="0">
                ?
              </tspan>
            </text>
            <text style={cls5} transform="translate(746.72 250.78)">
              <tspan x="0" y="0">
                /
              </tspan>
            </text>
            <text style={cls5} transform="translate(682 247.95)">
              <tspan x="0" y="0">
                .
              </tspan>
            </text>
            <text style={cls5} transform="translate(614.79 246.21)">
              <tspan x="0" y="0">
                ,
              </tspan>
            </text>
            <text style={cls5} transform="translate(560.41 169.64)">
              <tspan x="0" y="0">
                K
              </tspan>
            </text>
            <text style={cls5} transform="translate(624.79 169.64)">
              <tspan x="0" y="0">
                L
              </tspan>
            </text>
            <text style={cls5} transform="translate(687.66 181.45)">
              <tspan x="0" y="0">
                ;
              </tspan>
            </text>
            <text style={cls5} transform="translate(752.85 189.6)">
              <tspan x="0" y="0">
                ‘
              </tspan>
            </text>
            <text style={cls5} transform="translate(772 165.58)">
              <tspan x="0" y="0">
                “
              </tspan>
            </text>
            <text style={cls5} transform="translate(706.91 158.33)">
              <tspan x="0" y="0">
                :
              </tspan>
            </text>
            <text style={cls5} transform="translate(737.14 117.1)">
              <tspan x="0" y="0">
                [
              </tspan>
            </text>
            <text style={cls5} transform="translate(759.09 95.65)">
              <tspan x="0" y="0">
                ]
              </tspan>
            </text>
            <text style={cls5} transform="translate(733.91 58.12)">
              <tspan x="0" y="0">
                -
              </tspan>
            </text>
            <text style={cls5} transform="translate(752.46 18.83)">
              <tspan x="0" y="0">
                _
              </tspan>
            </text>
            <text style={cls5} transform="translate(801.54 50.38)">
              <tspan x="0" y="0">
                =
              </tspan>
            </text>
            <text style={cls5} transform="translate(815.78 27.77)">
              <tspan x="0" y="0">
                +
              </tspan>
            </text>
            {/* <text style={cls5} transform="translate(805.7 117.68)">
            <tspan x="0" y="0">]</tspan>
        </text>
        <text style={cls5} transform="translate(824.66 95.65)">
            <tspan x="0" y="0">}</tspan>
        </text> */}
            <text style={cls5} transform="translate(81.21 104.31)">
              <tspan x="0" y="0">
                Q
              </tspan>
            </text>
            <text style={cls5} transform="translate(145.21 104.81)">
              <tspan x="0" y="0">
                W
              </tspan>
            </text>
            <text style={cls5} transform="translate(212.59 104.31)">
              <tspan x="0" y="0">
                E
              </tspan>
            </text>
            <text style={cls5} transform="translate(278.15 104.81)">
              <tspan x="0" y="0">
                R
              </tspan>
            </text>
            <text style={cls5} transform="translate(345.36 104.81)">
              <tspan x="0" y="0">
                T
              </tspan>
            </text>
            <text style={cls5} transform="translate(413.25 104.81)">
              <tspan x="0" y="0">
                Y
              </tspan>
            </text>
            <text style={cls5} transform="translate(477.44 104.31)">
              <tspan x="0" y="0">
                U
              </tspan>
            </text>
            <text style={cls5} transform="translate(546.42 104.06)">
              <tspan x="0" y="0">
                I
              </tspan>
            </text>
            <text style={cls5} transform="translate(610.21 104.31)">
              <tspan x="0" y="0">
                O
              </tspan>
            </text>
            <text style={cls5} transform="translate(869.49 117.1)">
              <tspan x="0" y="0">
                \
              </tspan>
            </text>
            <text style={cls5} transform="translate(887.91 95.65)">
              <tspan x="0" y="0">
                |
              </tspan>
            </text>
            <text style={cls5} transform="translate(675.6 104.31)">
              <tspan x="0" y="0">
                P
              </tspan>
            </text>
            <text style={cls5} transform="translate(70.77 54.19)">
              <tspan x="0" y="0">
                1
              </tspan>
            </text>
            <text style={cls5} transform="translate(137.61 53.69)">
              <tspan x="0" y="0">
                2
              </tspan>
            </text>
            <text style={cls5} transform="translate(203.54 54.19)">
              <tspan x="0" y="0">
                3
              </tspan>
            </text>
            <text style={cls5} transform="translate(267.77 54.19)">
              <tspan x="0" y="0">
                4
              </tspan>
            </text>
            <text style={cls5} transform="translate(335.89 54.69)">
              <tspan x="0" y="0">
                5
              </tspan>
            </text>
            <text style={cls5} transform="translate(400.39 54.69)">
              <tspan x="0" y="0">
                6
              </tspan>
            </text>
            <text style={cls5} transform="translate(469.01 54.19)">
              <tspan x="0" y="0">
                7
              </tspan>
            </text>
            <text style={cls5} transform="translate(536.07 54.19)">
              <tspan x="0" y="0">
                8
              </tspan>
            </text>
            <text style={cls5} transform="translate(601.77 54.19)">
              <tspan x="0" y="0">
                9
              </tspan>
            </text>
            <text style={cls5} transform="translate(666.95 54.19)">
              <tspan x="0" y="0">
                0
              </tspan>
            </text>
            <text style={cls5} transform="translate(85.19 31.58)">
              <tspan x="0" y="0">
                !
              </tspan>
            </text>
            <text style={cls5} transform="translate(22.28 29.43)">
              <tspan x="0" y="0">
                ~
              </tspan>
            </text>
            <text style={cls5} transform="translate(149.91 31.08)">
              <tspan x="0" y="0">
                @
              </tspan>
            </text>
            <text style={cls5} transform="translate(222.67 31.08)">
              <tspan x="0" y="0">
                #
              </tspan>
            </text>
            <text style={cls5} transform="translate(283.98 32.08)">
              <tspan x="0" y="0">
                $
              </tspan>
            </text>
            <text style={cls5} transform="translate(356.11 32.08)">
              <tspan x="0" y="0">
                %
              </tspan>
            </text>
            <text style={cls5} transform="translate(414.91 32.08)">
              <tspan x="0" y="0">
                ^
              </tspan>
            </text>
            <text style={cls5} transform="translate(485.3 31.08)">
              <tspan x="0" y="0">
                &amp;
              </tspan>
            </text>
            <text style={cls5} transform="translate(551.05 32.58)">
              <tspan x="0" y="0">
                *
              </tspan>
            </text>
            <text style={cls5} transform="translate(617.51 31.58)">
              <tspan x="0" y="0">
                (
              </tspan>
            </text>
            <text style={cls5} transform="translate(682.69 31.58)">
              <tspan x="0" y="0">
                )
              </tspan>
            </text>
            <rect
              onMouseEnter={mouseHover}
              onMouseLeave={mouseLeave}
              style={cls3}
              id="space"
              x="257.48"
              y="267.45"
              width="325.56"
              height="56.53"
            />
            <text style={cls6} transform="translate(865.49 31.46)">
              <tspan x="0" y="0">
                Ba
              </tspan>
              <tspan style={cls2} x="14.33" y="0">
                c
              </tspan>
              <tspan x="20.77" y="0">
                k
              </tspan>
              <tspan x="-3.26" y="14">
                Space
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <div className="flex h-full w-screen justify-center">
        <p>Alright, lets get started!</p>
      </div>
    </div>
  );
}
