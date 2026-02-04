import React, { useState, useRef } from 'react';
import { Sparkles, Loader2, Lightbulb, Upload, X, Image as ImageIcon, Palette, Type } from 'lucide-react';
import { Button } from './Button';
import { generateCreativeIdeas } from '../services/geminiService';
import { AIGeneratedIdea } from '../types';

export const AICreativeAssistant: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [productType, setProductType] = useState('Quadro Decorativo');
  const [ideas, setIdeas] = useState<AIGeneratedIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme) return;

    setIsLoading(true);
    const results = await generateCreativeIdeas(theme, productType, imagePreview || undefined);
    setIdeas(results);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-zinc-900 dark:bg-black relative overflow-hidden border-y border-zinc-800">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 bg-zinc-800/50 rounded-full mb-6 backdrop-blur-sm border border-zinc-700">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">Curadoria com IA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Em dúvida na decoração?</h2>
          <p className="text-zinc-400 text-lg">
            Descreva seu estilo ou envie uma foto do ambiente para receber sugestões exclusivas.
          </p>
        </div>

        <div className="bg-zinc-950/50 backdrop-blur-xl border border-zinc-800 rounded-xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleGenerate} className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-zinc-400 mb-2">Inspiração Visual (Opcional)</label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  ref={fileInputRef}
                  id="image-upload"
                />
                
                {!imagePreview ? (
                  <Button
                    type="button"
                    variant="outline"
                    className="border-dashed border-zinc-700 hover:border-purple-500 text-zinc-400 hover:text-white"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Enviar foto do ambiente
                  </Button>
                ) : (
                  <div className="relative inline-block">
                    <img src={imagePreview} alt="Preview" className="h-20 w-20 object-cover rounded-lg border border-zinc-700" />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Descreva o ambiente/estilo</label>
              <input
                type="text"
                placeholder="Ex: Sala de estar minimalista com plantas..."
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">O que procura?</label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all appearance-none"
              >
                <option value="Quadro Decorativo">Quadro Decorativo</option>
                <option value="Composição de Quadros">Composição de Quadros (Kit)</option>
                <option value="Papel de Parede">Papel de Parede</option>
                <option value="Ensaio IA (Tema)">Tema para Ensaio IA</option>
                <option value="Presente Personalizado">Presente Personalizado</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full bg-white text-zinc-950 hover:bg-zinc-200 border-none shadow-none dark:bg-white dark:text-zinc-950"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analisando e Criando...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Gerar Ideias
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Results Area */}
          {ideas.length > 0 && (
            <div className="grid gap-4 animate-fade-in">
              <h3 className="text-sm font-bold text-zinc-400 mb-2 flex items-center uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-yellow-400 mr-2" />
                Conceitos Sugeridos
              </h3>
              {ideas.map((idea, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                  <div className="mb-4">
                    <p className="text-xl font-bold text-white mb-2">"{idea.slogan}"</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{idea.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800">
                    <div className="flex items-center text-xs text-zinc-500">
                      <Palette className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                      <span>{idea.colorPalette}</span>
                    </div>
                    <div className="flex items-center text-xs text-zinc-500">
                      <Type className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                      <span>{idea.typography}</span>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-xs text-center text-zinc-600 mt-4">
                Gostou? Envie um print no WhatsApp para iniciarmos a criação!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};