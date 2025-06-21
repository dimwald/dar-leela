import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className="flex-1 bg-slate-900 items-center justify-center">
      <Text className="text-white text-4xl font-light tracking-wide">
        breathwrk
      </Text>
    </Box>
  );
};

const OnboardingScreen = () => {
  return (
    <Box className="flex-1 bg-slate-900">
      <Box className="flex-1 items-center justify-center px-8">
        <Text className="text-white text-4xl font-light tracking-wide mb-16">
          breathwrk
        </Text>

        {/* Breathing wave animation placeholder */}
        <Box className="w-32 h-32 rounded-full border-2 border-white/30 mb-16 items-center justify-center">
          <Box className="w-24 h-24 rounded-full border border-white/20" />
        </Box>

        <Box className="items-center mb-12">
          <Text className="text-white text-3xl font-bold mb-2">
            Stress <Text className="italic font-light">Less</Text>
          </Text>
          <Text className="text-white text-3xl font-bold mb-2">
            <Text className="italic font-light">Sleep</Text> Better
          </Text>
          <Text className="text-white text-3xl font-bold mb-2">
            Increase <Text className="italic font-light">Energy</Text>
          </Text>
          <Text className="text-white text-3xl font-bold">
            <Text className="italic font-light">Feel</Text> Amazing
          </Text>
        </Box>

        {/* Statistics */}
        <Box className="flex-row justify-between w-full mb-12 px-4">
          <Box className="items-center">
            <Text className="text-white text-2xl font-bold">1 Billion</Text>
            <Text className="text-white/70 text-sm">breaths taken</Text>
          </Box>
          <Box className="items-center">
            <Text className="text-white text-lg font-bold">⭐⭐⭐⭐⭐</Text>
            <Text className="text-white/70 text-sm">App Of The Day</Text>
          </Box>
          <Box className="items-center">
            <Text className="text-white text-2xl font-bold">4 Million</Text>
            <Text className="text-white/70 text-sm">users worldwide</Text>
          </Box>
        </Box>

        {/* Buttons */}
        <Box className="w-full px-4">
          <Box className="bg-white rounded-full py-4 mb-4">
            <Button
              className="bg-transparent"
              onPress={() => router.push("/tabs")}
            >
              <Text className="text-slate-900 text-lg font-semibold">
                Get Started
              </Text>
            </Button>
          </Box>

          <Box className="flex-row items-center justify-center">
            <Text className="text-white/70">Have an account? </Text>
            <Button className="bg-transparent p-0">
              <Text className="text-white font-semibold">Login</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return <OnboardingScreen />;
}
