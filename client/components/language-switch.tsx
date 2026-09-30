"use client";

import { bindOption } from "@/utils";
import { useLanguage } from "./language";
import { ToggleButton } from "./ui/buttons";

export function LanguageSwitch() {
  const { t, localeModel } = useLanguage();

  return (
    <div className="lang" role="group" aria-label={t.language}>
      <ToggleButton model={bindOption(localeModel, "en")} lang="en">
        EN
      </ToggleButton>
      <span aria-hidden="true">|</span>
      <ToggleButton model={bindOption(localeModel, "ru")} lang="ru">
        RU
      </ToggleButton>
    </div>
  );
}
