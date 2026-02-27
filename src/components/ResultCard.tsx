import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import { InstitutionResult, CompetitionResult } from '../data';

interface ResultCardProps {
  institution: InstitutionResult;
}

const PrizeRow = ({
  place,
  winner,
  icon: Icon,
  iconColor
}: {
  place: string;
  winner: { name: string; grade?: string };
  icon: React.ElementType;
  iconColor: string;
}) => (
  <div className="flex items-center justify-between py-2 border-b border-amber-100 last:border-0">
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-full bg-amber-50 ${iconColor}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="font-medium text-amber-900 leading-relaxed">{place}</p>
        <p className="text-sm text-amber-700/80 leading-relaxed">{winner.name}</p>
      </div>
    </div>
    {winner.grade && (
      <span className="text-xs font-medium px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">
        {winner.grade}
      </span>
    )}
  </div>
);

const CompetitionSection = ({
  title,
  result
}: {
  title: string;
  result: CompetitionResult;
}) => (
  <div className="bg-white/60 rounded-xl p-4 border border-amber-200/50 shadow-sm">
    <h4 className="text-base md:text-lg font-serif font-bold text-blue-900 mb-4 text-center border-b border-amber-200/50 pb-3 leading-[1.6]">
      {title}
    </h4>
    <div className="space-y-1">
      <PrizeRow
        place="முதல் பரிசு"
        winner={result.firstPlace}
        icon={Trophy}
        iconColor="text-yellow-500"
      />
      <PrizeRow
        place="இரண்டாம் பரிசு"
        winner={result.secondPlace}
        icon={Medal}
        iconColor="text-slate-400"
      />
      <PrizeRow
        place="ஆறுதல் பரிசு"
        winner={result.consolation}
        icon={Award}
        iconColor="text-amber-600"
      />
    </div>
  </div>
);

export const ResultCard: React.FC<ResultCardProps> = ({ institution }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md border border-amber-200 relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-300/40 rounded-tl-2xl -translate-x-2 -translate-y-2"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-300/40 rounded-br-2xl translate-x-2 translate-y-2"></div>
      
      <h3 className="text-lg md:text-2xl font-serif font-bold text-red-800 mb-6 text-center leading-[1.6] px-2">
        {institution.name}
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <CompetitionSection title="கட்டுரைப் போட்டி" result={institution.essay} />
        <CompetitionSection title="கவிதைப் போட்டி" result={institution.poetry} />
      </div>
    </div>
  );
};
