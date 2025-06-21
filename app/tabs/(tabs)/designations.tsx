import React from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ScrollView } from "react-native";

const NumberGrid = () => {
  const numbers = [
    [72, 71, 70, 69, 68, 67, 66, 65, 64],
    [55, 56, 57, 58, 59, 60, 61, 62, 63],
    [54, 53, 52, 51, 50, 49, 48, 47, 46],
    [37, 38, 39, 40, 41, 42, 43, 44, 45],
    [36, 35, 34, 33, 32, 31, 30, 29, 28],
    [19, 20, 21, 22, 23, 24, 25, 26, 27],
    [18, 17, 16, 15, 14, 13, 12, 11, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  const getNumberColor = (num: number) => {
    if (num === 68 || num === 6) return "text-red-500";
    return "text-slate-800";
  };

  return (
    <Box className="bg-amber-100 rounded-lg p-4 m-4">
      <Text className="text-slate-600 text-sm mb-4 text-center">
        Нажми на клетку, чтобы перейти к карточке с описанием
      </Text>
      {numbers.map((row, rowIndex) => (
        <Box key={rowIndex} className="flex-row justify-between mb-2">
          {row.map((number) => (
            <Button key={number} className="w-8 h-8 bg-transparent p-0 m-0.5">
              <Text className={`text-sm font-medium ${getNumberColor(number)}`}>
                {number}
              </Text>
            </Button>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default function Designations() {
  return (
    <Box className="flex-1 bg-slate-900">
      <ScrollView className="flex-1">
        <Box className="flex-1 items-center justify-center px-4 py-8">
          {/* Header */}
          <Box className="flex-row items-center justify-between w-full mb-8 px-4">
            <Text className="text-white text-2xl font-light">Hi, Zlata!</Text>
            <Box className="w-8 h-8 rounded-full bg-slate-700 items-center justify-center">
              <Text className="text-white">🔔</Text>
            </Box>
          </Box>

          {/* Today's message */}
          <Box className="bg-slate-800/50 rounded-2xl p-6 mb-8 w-full">
            <Text className="text-white text-lg mb-4">
              Today is 21 june, best day to keep yourself calm and in good
              position
            </Text>

            {/* Circular illustration placeholder */}
            <Box className="w-48 h-48 rounded-full bg-slate-700/30 mx-auto mb-6 items-center justify-center">
              <Box className="w-32 h-32 rounded-full border-2 border-blue-400/50 items-center justify-center">
                <Text className="text-blue-400 text-6xl">⚡</Text>
              </Box>
            </Box>
          </Box>

          {/* Start new game button */}
          <Box className="bg-slate-700/50 rounded-full px-8 py-3 mb-8">
            <Button className="bg-transparent">
              <Text className="text-white font-medium">Start new game</Text>
            </Button>
          </Box>

          {/* Navigation title */}
          <Text className="text-white text-2xl font-bold mb-4">НАВИГАЦИЯ</Text>

          {/* Number grid */}
          <NumberGrid />
        </Box>
      </ScrollView>
    </Box>
  );
}
