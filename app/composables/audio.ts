import type { MaybeArray } from "~/types/utils";

/**
 * A composable for playing audio files.
 *
 * It provides play and pause functionality,
 * and automatically updates the audio source when the src prop changes.
 * @param src The source URL of the audio file to play. Can be a string or a ref to a string.
 * @param defaults Default settings for the audio element, such as volume and loop.
 * @returns An object containing the isPlaying state, and play and pause functions.
 */
export const useAudio = (
  src: MaybeRef<MaybeArray<string>>,
  defaults: Pick<HTMLAudioElement, "volume" | "loop">,
) => {
  const audios = computed((): string[] => {
    const srcValue = toValue(src);
    return Array.isArray(srcValue) ? srcValue : [srcValue];
  });

  const audio = ref<HTMLAudioElement | null>(null);
  const volume = ref(defaults.volume);
  const isPlaying = ref(false);

  const currentTrackIndex = ref(0);
  const currentTrack = computed(() => audios.value.at(currentTrackIndex.value));

  const syncVolumeRef = () => (volume.value = audio.value?.volume ?? defaults.volume);
  const setPlaying = () => (isPlaying.value = true);
  const setPaused = () => (isPlaying.value = false);

  const play = async () => {
    try {
      await audio.value?.play();
      setPlaying();
    } catch (error) {
      console.error("Failed to play audio:", error);
      setPaused();
    }
  };

  const pause = () => {
    audio.value?.pause();
    setPaused();
  };

  const toggle = async () => {
    if (isPlaying.value) pause();
    else await play();
  };

  const prevTrack = () => {
    if (currentTrackIndex.value > 0) {
      currentTrackIndex.value--;
    } else {
      currentTrackIndex.value = audios.value.length - 1;
    }
  };

  const nextTrack = () => {
    if (currentTrackIndex.value < audios.value.length - 1) {
      currentTrackIndex.value++;
    } else {
      currentTrackIndex.value = 0;
    }
  };

  watch(volume, (level) => {
    if (audio.value && level >= 0 && level <= 1) {
      audio.value.volume = level;
    }
  });

  watch(audios, (newAudios) => {
    if (!newAudios.includes(currentTrack.value!)) {
      currentTrackIndex.value = 0;
    }
  });

  watch(currentTrack, (newTrack) => {
    if (audio.value && newTrack) {
      audio.value.src = newTrack;
      audio.value.load();
    }

    if (isPlaying.value) {
      audio.value?.play();
    }
  });

  onMounted(() => {
    audio.value = new Audio(currentTrack.value);
    audio.value.volume = defaults.volume;
    audio.value.loop = defaults.loop;

    audio.value.addEventListener("volumechange", syncVolumeRef);
    audio.value.addEventListener("ended", nextTrack);
    audio.value.addEventListener("play", setPlaying);
    audio.value.addEventListener("pause", setPaused);
  });

  onUnmounted(() => {
    audio.value?.pause();

    audio.value?.removeEventListener("volumechange", syncVolumeRef);
    audio.value?.removeEventListener("ended", nextTrack);
    audio.value?.removeEventListener("play", setPlaying);
    audio.value?.removeEventListener("pause", setPaused);
  });

  return {
    volume,
    isPlaying,
    play,
    pause,
    toggle,
    prevTrack,
    nextTrack,
  };
};
