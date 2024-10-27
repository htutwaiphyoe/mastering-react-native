import { useRouter } from "expo-router";
import { useUserStore } from "@/store/userStore";

export const useOnboarding = () => {
  const router = useRouter();
  const { isOnBoarded, setIsOnBoarded } = useUserStore();

  const finishOnboarding = () => {
    setIsOnBoarded(true);
    router.replace("/");
  };

  const backToOnboarding = () => {
    setIsOnBoarded(false);
    router.replace("onboarding");
  };

  return {
    isOnBoarded,
    finishOnboarding,
    backToOnboarding,
  };
};
