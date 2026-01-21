import React, { useState, useRef } from "react";

interface OtpInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  onChange?: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onComplete,
  onChange,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  /**
   * @description Handles single digit change and auto-advances focus.
   */
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;

    // Ensure only one digit is processed
    if (value.length > 1) {
      // If more than one character (e.g., pasted input), let handlePaste handle it
      return;
    }

    // Only allow digits 0-9
    if (value && !/^\d$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    const newOtpString = newOtp.join("");

    if (onChange) onChange(newOtpString);

    // Auto-advance focus
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check for completion
    if (newOtpString.length === length && onComplete) {
      onComplete(newOtpString);
    }
  };

  /**
   * @description Handles backspace/delete key presses for focus management.
   */
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (newOtp[index]) {
        // If current box has a value, clear it
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // If current box is empty, move focus to previous box
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  /**
   * Handles pasting a full OTP code into any input field.
   */
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Remove non-digits and limit to the expected length
    const pasteData = e.clipboardData
      .getData("text/plain")
      .replace(/\D/g, "")
      .slice(0, length);

    if (pasteData.length > 0) {
      const newOtp = pasteData.split("");
      const filledOtp = newOtp.concat(
        new Array(length - newOtp.length).fill(""),
      );
      // Fill the rest of the array with empty strings if pasted data is shorter than length
      setOtp(filledOtp);
      const combinedValue = filledOtp.join("").trim();
      if (onChange) onChange(combinedValue);

      // Focus the last filled or the next input field
      const nextFocusIndex = Math.min(pasteData.length, length - 1);
      inputRefs.current[nextFocusIndex]?.focus();

      if (pasteData.length === length && onComplete) {
        onComplete(pasteData);
      }
    }
  };

  return (
    <div className="flex gap-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="tel"
          maxLength={1}
          value={digit}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="size-12 rounded-lg border-2 border-transparent bg-[#F3F6F8] text-center font-mono text-lg text-[#130B30] transition-all duration-200 outline-none focus:border-[#0A814A]"
          style={{
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            caretColor: "#0A814A",
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
