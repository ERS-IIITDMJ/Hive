import React from 'react';

function NotificationComponent({ title, description, time, type, isUnread, variant }) {
 
  const getVariantStyles = () => {
    
    const v = variant ? variant.toLowerCase() : '';

    switch (v) {
      case 'overdue':
        return { color: '#ef4444', bg: 'bg-[#ef4444]/10', path: <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /> };
      case 'approval':
        return { color: '#10b981', bg: 'bg-[#10b981]/10', path: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> };
      case 'announcement':
        return { color: '#06b6d4', bg: 'bg-[#06b6d4]/10', path: <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /> };
      case 'rejection':
        return { color: '#f87171', bg: 'bg-[#f87171]/10', path: <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /> };
      default: 
        return { color: '#facc15', bg: 'bg-[#facc15]/10', path: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> };
    }
  };


  const styles = getVariantStyles();

  return (
    <div 
      className="bg-[#0b0a0d] border-l-4 border-y border-r rounded-xl p-4 flex items-start space-x-3 w-full transition-all relative border-zinc-800/50"
      style={{ borderLeftColor: styles.color }}
    >
      <div className={`${styles.bg} p-2.5 rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
        <svg className="shrink-0" style={{ color: styles.color }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {styles.path}
        </svg>
      </div>

      <div className="flex-1 flex flex-col space-y-1 pr-6">
        <h4 className="text-white font-semibold text-sm tracking-wide">{title || "Notification"}</h4>
        <p className="text-[#a1a1aa] text-xs leading-relaxed">{description || ""}</p>
        <div className="flex items-center space-x-3 pt-1">
          <span className="text-[#71717a] text-[10px] font-medium">{time}</span>
          {type && (
            <span className="bg-[#facc15]/10 text-[#facc15] text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
              {type}
            </span>
          )}
        </div>
      </div>

      {isUnread && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#06b6d4] rounded-full shadow-sm shadow-[#06b6d4]/50" />
      )}
    </div>
  );
}

export default NotificationComponent;
