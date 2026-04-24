import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";
import { ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";

import "react-notion-x/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

const notion = new NotionAPI({
  apiBaseUrl: "/notion-api"
});

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recordMap, setRecordMap] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const notionPageIds: Record<string, string> = {
    bookly: "1d66a88b-fb95-80d0-9c5f-c392cb416084",
    sehatsetu: "2ba6a88b-fb95-809b-9296-ecafc610af12",
  };

  useEffect(() => {
    async function fetchNotionData() {
      const pageId = notionPageIds[id || ""];
      
      if (!pageId) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(false);
        
        const data = await notion.getPage(pageId);
        setRecordMap(data);
      } catch (err) {
        console.error("Notion Fetch Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    fetchNotionData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-white">
      <Loader2 className="animate-spin text-slate-400" size={32} />
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Loading Case Study</p>
    </div>
  );

  if (error || !recordMap) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white px-6">
      <AlertCircle className="text-red-500 mb-4" size={48} />
      <h2 className="text-2xl font-semibold mb-6">Case Study Not Found</h2>
      <button onClick={() => navigate('/')} className="px-8 py-3 bg-black text-white rounded-full font-bold">Back to Projects</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-50">
        <div className="pt-28 pb-8 max-w-5xl mx-auto px-6 flex justify-between items-center">
  <button 
    onClick={() => navigate(-1)} 
    className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] cursor-pointer text-slate-500 hover:text-black transition-colors"
  >
    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
    Back
  </button>
</div>
      </nav>

      <div className="pb-24 max-w-5xl mx-auto">
        <NotionRenderer 
          recordMap={recordMap} 
          fullPage={true} 
          darkMode={false}
          components={{ Code, Collection }}
        />
      </div>
    </div>
  );
}