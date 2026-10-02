"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { TrendingUp, Users, Award, BookOpen } from "lucide-react";

export default function MetricsBar() {
  const { metrics } = PORTFOLIO_DATA;

  const getMetricStyle = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          textColor: "text-[#FF5500]",
          icon: <Users className="w-5 h-5 text-[#FF5500]" />,
          borderHover: "hover:border-[#FF5500]",
          labelAccent: "text-[#FF5500]",
        };
      case 1:
        return {
          textColor: "text-[#2563EB]",
          icon: <TrendingUp className="w-5 h-5 text-[#2563EB]" />,
          borderHover: "hover:border-[#2563EB]",
          labelAccent: "text-[#2563EB]",
        };
      case 2:
        return {
          textColor: "text-[#10B981]",
          icon: <Award className="w-5 h-5 text-[#10B981]" />,
          borderHover: "hover:border-[#10B981]",
          labelAccent: "text-[#10B981]",
        };
      case 3:
        return {
          textColor: "text-white",
          icon: <BookOpen className="w-5 h-5 text-[#FF5500]" />,
          borderHover: "hover:border-[#FF5500]",
          labelAccent: "text-neutral-300",
        };
      default:
        return {
          textColor: "text-white",
          icon: null,
          borderHover: "hover:border-white",
          labelAccent: "text-white",
        };
    }
  };

  return (
    <section className="w-full bg-black text-white border-b-2 sm:border-b-[3px] border-black py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
          <div className="font-mono text-xs text-[#FF5500] font-bold tracking-widest flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF5500]"></span>
            // VERIFIED PRODUCTION & ACADEMIC METRICS
          </div>
          <div className="font-mono text-xs text-neutral-400">
            SOURCE: PRODUCTION WORK & OFFICIAL NSU/NDC RECORDS
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => {
            const style = getMetricStyle(idx);
            return (
              <div
                key={idx}
                className={`bg-[#141517] border-2 border-neutral-700 p-5 sm:p-6 brutal-card flex flex-col justify-between relative group ${style.borderHover} transition-colors`}
              >
                {/* Corner Accent indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                    METRIC_0{idx + 1}
                  </span>
                  {style.icon}
                </div>

                {/* Big Metric Value */}
                <div>
                  <div
                    className={`font-display font-black text-4xl sm:text-5xl ${style.textColor} tracking-tight leading-none mb-2`}
                  >
                    {metric.value}
                  </div>
                  <div
                    className={`font-mono font-bold text-xs ${style.labelAccent} tracking-wider uppercase mb-2`}
                  >
                    {metric.label}
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">
                    {metric.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
