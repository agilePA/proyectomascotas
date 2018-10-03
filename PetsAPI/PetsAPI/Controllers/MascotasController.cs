using Microsoft.AspNetCore.Mvc;
using PetsAPI.Database;
using PetsAPI.Models;
using PetsAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetsAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/mascotas")]

    public class MascotasController: Controller
    {
        private MascotaRepository mascotasRepository;

        public MascotasController(MascotasDbContext mascotasDbContext)
        {
            this.mascotasRepository = new MascotaRepository(mascotasDbContext);
        }

        [HttpGet]
        public IEnumerable<Mascota> GetAll()
        {
            return this.mascotasRepository.GetAll();
        }

        [HttpGet("{id}")]
        public Mascota Get(int id)
        {
            return this.mascotasRepository.GetOne(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Mascota mascota)
        {
            IActionResult response;
            try
            {
                this.mascotasRepository.Create(mascota);
                response = Ok();
            }
            catch (Exception exe)
            {
                response = BadRequest(exe.Message);
            }
            return response;
        }

        [HttpPut("{id}")]
        public IActionResult Put([FromBody]Mascota mascota, int id)
        {
            IActionResult response;
            try
            {
                this.mascotasRepository.Edit(id, mascota);
                response = Ok();
            }
            catch (Exception exe)
            {
                response = BadRequest(exe.Message);
            }
            return response;
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            IActionResult response;
            try
            {
                this.mascotasRepository.delete(id);
                response = Ok();
            }
            catch (Exception exe)
            {
                response = BadRequest(exe.Message);
            }
            return response;
        }
    }
}
