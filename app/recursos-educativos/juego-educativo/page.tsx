'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, AlertCircle, ChevronRight } from 'lucide-react'
import Image from 'next/image'

// Preguntas de ejemplo para el quiz
const quizQuestions = [
  {
    question: "¿Cuál de estas especies es endémica de Chile?",
    options: ["Cóndor andino", "Puma", "Zorro culpeo", "Monito del monte"],
    correctAnswer: "Monito del monte",
    explanation: "El monito del monte (Dromiciops gliroides) es un pequeño marsupial endémico de los bosques templados de Chile y Argentina.",
    image: "/placeholder.svg"
  },
  {
    question: "¿En qué región de Chile se encuentra el desierto más árido del mundo?",
    options: ["Región de Atacama", "Región de Antofagasta", "Región de Tarapacá", "Región de Arica y Parinacota"],
    correctAnswer: "Región de Antofagasta",
    explanation: "El desierto de Atacama, el más árido del mundo, se encuentra principalmente en la Región de Antofagasta.",
    image: "/placeholder.svg"
  },
  {
    question: "¿Cuál es el árbol nacional de Chile?",
    options: ["Araucaria", "Alerce", "Copihue", "Quillay"],
    correctAnswer: "Araucaria",
    explanation: "La Araucaria araucana, también conocida como pehuén, es el árbol nacional de Chile.",
    image: "/placeholder.svg"
  },
  {
    question: "¿Qué porcentaje aproximado de las especies de plantas vasculares de Chile son endémicas?",
    options: ["10%", "25%", "50%", "75%"],
    correctAnswer: "50%",
    explanation: "Aproximadamente el 50% de las especies de plantas vasculares de Chile son endémicas, lo que significa que no se encuentran de forma natural en ningún otro lugar del mundo.",
    image: "/placeholder.svg"
  },
  {
    question: "¿Cuál de estos ecosistemas NO se encuentra en Chile?",
    options: ["Bosque templado lluvioso", "Desierto", "Selva tropical", "Estepa patagónica"],
    correctAnswer: "Selva tropical",
    explanation: "Chile tiene una gran diversidad de ecosistemas, pero no cuenta con selvas tropicales debido a su ubicación geográfica y clima.",
    image: "/placeholder.svg"
  }
]

export default function JuegoEducativo() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const handleAnswer = (answer: string) => {
    if (isAnswered) return
    setSelectedAnswer(answer)
    setIsAnswered(true)
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setIsAnswered(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Quiz de Biodiversidad Chilena</h1>
        
        {!showResult ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Pregunta {currentQuestion + 1} de {quizQuestions.length}</CardTitle>
              <Progress value={(currentQuestion / quizQuestions.length) * 100} className="w-full" />
            </CardHeader>
            <CardContent>
              <Image
                src={quizQuestions[currentQuestion].image}
                alt="Imagen relacionada con la pregunta"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold mb-4">{quizQuestions[currentQuestion].question}</p>
              <div className="space-y-2">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`w-full justify-start text-left ${
                      selectedAnswer === option
                        ? option === quizQuestions[currentQuestion].correctAnswer
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-red-500 hover:bg-red-600'
                        : ''
                    }`}
                    disabled={isAnswered}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {isAnswered && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold mb-2">
                    {selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? (
                      <span className="text-green-600 flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2" /> ¡Correcto!
                      </span>
                    ) : (
                      <span className="text-red-600 flex items-center">
                        <XCircle className="w-5 h-5 mr-2" /> Incorrecto
                      </span>
                    )}
                  </p>
                  <p>{quizQuestions[currentQuestion].explanation}</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={nextQuestion} disabled={!isAnswered} className="w-full">
                {currentQuestion < quizQuestions.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Resultados del Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">Has completado el quiz de Biodiversidad Chilena.</p>
              <p className="text-2xl font-bold mb-4">
                Tu puntuación: {score} de {quizQuestions.length}
              </p>
              <Progress value={(score / quizQuestions.length) * 100} className="w-full mb-4" />
              <Badge variant={score === quizQuestions.length ? "default" : "secondary"} className="text-lg p-2">
                {score === quizQuestions.length ? '¡Excelente!' : 'Sigue aprendiendo'}
              </Badge>
            </CardContent>
            <CardFooter>
              <Button onClick={restartQuiz} className="w-full">
                <AlertCircle className="w-4 h-4 mr-2" />
                Reiniciar Quiz
              </Button>
            </CardFooter>
          </Card>
        )}

        <section className="mt-12 bg-green-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Quieres aprender más?</h2>
          <p className="mb-6 text-lg">
            Explora nuestros recursos educativos para profundizar tus conocimientos sobre la biodiversidad chilena.
          </p>
          <Button variant="secondary" size="lg">
            Ver recursos educativos
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </section>
      </main>
    </div>
  )
}



