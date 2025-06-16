import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillGroups = [
    {
      category: "Frontend",
      icon: "⚛️",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", icon: "⚛️", color: "text-blue-500" },
        { name: "JavaScript", icon: "🟨", color: "text-yellow-500" },
        { name: "HTML5", icon: "🟧", color: "text-orange-500" },
        { name: "CSS3", icon: "🎨", color: "text-blue-600" },
        { name: "TypeScript", icon: "🔷", color: "text-blue-700" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: "🟢", color: "text-green-500" },
        { name: "Express.js", icon: "🚀", color: "text-gray-700" },
        { name: "RESTful APIs", icon: "🔗", color: "text-purple-500" },
        { name: "Microservices", icon: "🏗️", color: "text-indigo-500" },
        { name: "JWT Auth", icon: "🔐", color: "text-red-500" }
      ]
    },
    {
      category: "Database & DevOps",
      icon: "🗄️",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: "🍃", color: "text-green-600" },
        { name: "SQL", icon: "📊", color: "text-blue-600" },
        { name: "Docker", icon: "🐳", color: "text-blue-500" },
        { name: "Git", icon: "📝", color: "text-orange-600" },
        { name: "API Gateway", icon: "🌐", color: "text-cyan-500" }
      ]
    },
    {
      category: "Modern Skills",
      icon: "🚀",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "AI Integration", icon: "🤖", color: "text-purple-600" },
        { name: "SaaS Development", icon: "☁️", color: "text-blue-500" },
        { name: "MVP Development", icon: "⚡", color: "text-yellow-500" },
        { name: "Startup Building", icon: "🏢", color: "text-gray-600" }
      ]
    }
  ];
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600">Full-stack expertise across modern technologies</p>
          
          {/* Floating orbs background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-32 h-32 rounded-full opacity-10 bg-gradient-to-r ${
                  i % 4 === 0 ? 'from-blue-400 to-purple-400' :
                  i % 4 === 1 ? 'from-green-400 to-blue-400' :
                  i % 4 === 2 ? 'from-purple-400 to-pink-400' :
                  'from-orange-400 to-red-400'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {skillGroups.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              {/* 3D Card Container */}
              <div className="card p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform-gpu">
                {/* Category Header with 3D Icon */}
                <div className="text-center mb-6">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skillGroup.gradient} flex items-center justify-center text-2xl shadow-lg relative`}
                    whileHover={{ 
                      rotateY: 180,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.span
                      className="absolute"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {skillGroup.icon}
                    </motion.span>
                    <motion.span
                      className="absolute"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      🌟
                    </motion.span>
                    
                    {/* Glowing ring effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${skillGroup.gradient} opacity-30`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-slate-900">{skillGroup.category}</h3>
                </div>

                {/* Skills List with 3D Effects */}
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.05,
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (index * 0.1) + (skillIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-200 cursor-pointer group/skill"
                    >
                      {/* 3D Skill Icon */}
                      <motion.div
                        className="relative"
                        whileHover={{ 
                          rotateY: 360,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <span className="text-lg group-hover/skill:animate-bounce">
                          {skill.icon}
                        </span>
                        
                        {/* Glowing dot */}
                        <motion.div
                          className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${skill.color.replace('text-', 'bg-')} opacity-0 group-hover/skill:opacity-100`}
                          animate={{
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                      
                      <span className={`font-medium ${skill.color} group-hover/skill:text-slate-900 transition-colors duration-200`}>
                        {skill.name}
                      </span>
                      
                      {/* Skill level indicator */}
                      <motion.div
                        className="ml-auto flex gap-1"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${skill.color.replace('text-', 'bg-')}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              duration: 0.2, 
                              delay: i * 0.1 
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Card glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${skillGroup.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                />
              </div>

              {/* 3D Shadow */}
              <motion.div
                className="absolute inset-0 bg-black/10 rounded-lg transform translate-y-2 translate-x-2 -z-10"
                whileHover={{
                  translateY: 4,
                  translateX: 4,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {['⚛️', '🚀', '⚙️', '🌐', '💻', '🔧', '📱', '🎯'].map((tech, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.05, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
