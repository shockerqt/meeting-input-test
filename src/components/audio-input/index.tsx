import { useEffect, useRef } from "react";

const getMedia = async () => {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
      throw new Error("getUserMedia not supported on your browser!");

    console.log("getUserMedia supported.");

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    console.log(stream);

    const recorder = new MediaRecorder(stream);

    return {
      stream,
      recorder,
    };
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    else console.log("Error on audio test");
  }
};

export const AudioInput = () => {
  const recorderRef = useRef<MediaRecorder>(null);

  useEffect(() => {
    const a = async () => {
      const { recorder } = (await getMedia()) ?? {};
      recorderRef.current = recorder ?? null;
    };

    a();
  }, []);

  return null;
};
