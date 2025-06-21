import React from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { ScrollView } from "react-native";

export default function Affirmation() {
  return (
    <Box className="flex-1 bg-slate-900">
      <ScrollView className="flex-1">
        <Box className="flex-1 px-6 py-8">
          {/* Header */}
          <Box className="flex-row items-center justify-between mb-12">
            <Text className="text-white text-2xl font-light">Hi, Zlata!</Text>
            <Box className="w-8 h-8 rounded-full bg-slate-700 items-center justify-center">
              <Text className="text-white">🔔</Text>
            </Box>
          </Box>

          {/* Today's affirmation */}
          <Box className="mb-8">
            <Text className="text-white text-lg leading-7">
              Today is 21 june, best day to keep{"\n"}
              yourself calm and in good position
            </Text>
          </Box>

          {/* Breathing circle illustration */}
          <Box className="items-center justify-center flex-1 mb-12">
            <Box className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 items-center justify-center">
              {/* Outer circle */}
              <Box className="w-56 h-56 rounded-full border border-slate-600 items-center justify-center">
                {/* Inner breathing animation circles */}
                <Box className="w-48 h-48 rounded-full border-2 border-blue-400/50 items-center justify-center">
                  <Box className="w-32 h-32 rounded-full border border-blue-400/30 items-center justify-center">
                    {/* Central breathing visualization */}
                    <Box className="w-16 h-16 rounded-full bg-blue-400/20 items-center justify-center">
                      <Box className="w-4 h-4 rounded-full bg-blue-400" />
                    </Box>
                  </Box>
                </Box>

                {/* Decorative elements - stars/sparkles */}
                <Box className="absolute top-8 left-12">
                  <Text className="text-blue-400 text-xs">✦</Text>
                </Box>
                <Box className="absolute top-16 right-8">
                  <Text className="text-blue-400 text-xs">✧</Text>
                </Box>
                <Box className="absolute bottom-12 left-8">
                  <Text className="text-blue-400 text-xs">✦</Text>
                </Box>
                <Box className="absolute bottom-8 right-12">
                  <Text className="text-blue-400 text-xs">✧</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
